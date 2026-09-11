import { randomUUID, createHash, randomBytes } from 'node:crypto';
import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import type {
  AuthTokens,
  LoginInput,
  PublicUser,
  RegisterInput,
} from '@rankly/shared';
import type { User } from '@prisma/client';
import type { AppConfig } from '../config/configuration';
import { PrismaService } from '../prisma/prisma.service';
import { PointsService } from '../points/points.service';

function sha256(input: string): string {
  return createHash('sha256').update(input).digest('hex');
}

@Injectable()
export class AuthService {
  private readonly cfg: AppConfig;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly points: PointsService,
    config: ConfigService<{ app: AppConfig }, true>,
  ) {
    this.cfg = config.get('app', { infer: true });
  }

  async register(input: RegisterInput): Promise<{ user: PublicUser; tokens: AuthTokens }> {
    const email = input.email.toLowerCase().trim();
    const existing = await this.prisma.user.findFirst({
      where: { OR: [{ email }, { username: input.username }] },
      select: { email: true },
    });
    if (existing) {
      throw new ConflictException('Email or username already in use');
    }

    const passwordHash = await argon2.hash(input.password);
    const user = await this.prisma.user.create({
      data: {
        email,
        username: input.username,
        passwordHash,
        displayName: input.username,
      },
    });

    await this.points.grantSignupBonus(user.id);
    const tokens = await this.issueTokens(user, null, null);
    return { user: toPublicUser(user), tokens };
  }

  async login(
    input: LoginInput,
    ctx: { ip?: string; userAgent?: string },
  ): Promise<{ user: PublicUser; tokens: AuthTokens }> {
    const email = input.email.toLowerCase().trim();
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user || user.bannedAt) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const ok = await argon2.verify(user.passwordHash, input.password);
    if (!ok) {
      throw new UnauthorizedException('Invalid credentials');
    }
    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastActiveAt: new Date() },
    });
    const tokens = await this.issueTokens(user, ctx.ip ?? null, ctx.userAgent ?? null);
    return { user: toPublicUser(user), tokens };
  }

  /** Rotating refresh: the presented token is revoked and a new one issued.
   *  Re-use of an already-revoked token nukes the whole family (theft signal). */
  async refresh(
    refreshToken: string,
    ctx: { ip?: string; userAgent?: string },
  ): Promise<AuthTokens> {
    const tokenHash = sha256(refreshToken);
    const record = await this.prisma.refreshToken.findUnique({
      where: { tokenHash },
      include: { user: true },
    });

    if (!record) {
      throw new UnauthorizedException('Invalid refresh token');
    }
    if (record.revokedAt || record.expiresAt < new Date()) {
      await this.prisma.refreshToken.updateMany({
        where: { familyId: record.familyId, revokedAt: null },
        data: { revokedAt: new Date() },
      });
      throw new UnauthorizedException('Refresh token expired or reused');
    }

    const newTokens = await this.issueTokens(
      record.user,
      ctx.ip ?? null,
      ctx.userAgent ?? null,
      record.familyId,
    );
    await this.prisma.refreshToken.update({
      where: { id: record.id },
      data: { revokedAt: new Date() },
    });
    return newTokens;
  }

  async logout(refreshToken: string): Promise<void> {
    const tokenHash = sha256(refreshToken);
    await this.prisma.refreshToken.updateMany({
      where: { tokenHash, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  async me(userId: string): Promise<PublicUser> {
    const user = await this.prisma.user.findUniqueOrThrow({ where: { id: userId } });
    return toPublicUser(user);
  }

  private async issueTokens(
    user: User,
    ip: string | null,
    userAgent: string | null,
    familyId?: string,
  ): Promise<AuthTokens> {
    const accessToken = await this.jwt.signAsync(
      { sub: user.id, username: user.username, role: user.role, type: 'access' },
      { secret: this.cfg.jwt.accessSecret, expiresIn: this.cfg.jwt.accessTtl },
    );

    const rawRefresh = randomBytes(48).toString('base64url');
    const fam = familyId ?? randomUUID();
    await this.prisma.refreshToken.create({
      data: {
        userId: user.id,
        tokenHash: sha256(rawRefresh),
        familyId: fam,
        expiresAt: new Date(Date.now() + this.cfg.jwt.refreshTtl * 1000),
        ip,
        userAgent,
      },
    });

    return {
      accessToken,
      refreshToken: rawRefresh,
      expiresIn: this.cfg.jwt.accessTtl,
    };
  }
}

function toPublicUser(user: User): PublicUser {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
    displayName: user.displayName,
    avatarUrl: user.avatarUrl,
    bio: user.bio,
    reputation: user.reputation,
    role: user.role,
    createdAt: user.createdAt.toISOString(),
  };
}
