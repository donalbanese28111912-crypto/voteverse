import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import type { AppConfig } from '../config/configuration';
import type { AuthUser } from '../common/decorators';
import { PrismaService } from '../prisma/prisma.service';

interface JwtPayload {
  sub: string;
  username: string;
  role: AuthUser['role'];
  type: 'access';
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    config: ConfigService<{ app: AppConfig }, true>,
    private readonly prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('app', { infer: true }).jwt.accessSecret,
    });
  }

  async validate(payload: JwtPayload): Promise<AuthUser> {
    if (payload.type !== 'access') {
      throw new UnauthorizedException('Wrong token type');
    }
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      select: { id: true, role: true, username: true, bannedAt: true },
    });
    if (!user || user.bannedAt) {
      throw new UnauthorizedException('Account unavailable');
    }
    return { id: user.id, role: user.role, username: user.username };
  }
}
