import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import {
  loginSchema,
  refreshSchema,
  registerSchema,
  type LoginInput,
  type RegisterInput,
} from '@voteverse/shared';
import type { Request } from 'express';
import { CurrentUser } from '../common/decorators';
import { JwtAuthGuard } from '../common/guards';
import { Public } from '../common/decorators';
import { ZodValidationPipe } from '../common/zod-validation.pipe';
import { AuthService } from './auth.service';

function reqCtx(req: Request): { ip?: string; userAgent?: string } {
  return { ip: req.ip, userAgent: req.get('user-agent') ?? undefined };
}

@Controller({ path: 'auth', version: '1' })
@UseGuards(JwtAuthGuard)
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Public()
  @Throttle({ default: { limit: 10, ttl: 60_000 } })
  @Post('register')
  register(
    @Body(new ZodValidationPipe(registerSchema)) dto: RegisterInput,
  ) {
    return this.auth.register(dto);
  }

  @Public()
  @Throttle({ default: { limit: 10, ttl: 60_000 } })
  @HttpCode(200)
  @Post('login')
  login(
    @Body(new ZodValidationPipe(loginSchema)) dto: LoginInput,
    @Req() req: Request,
  ) {
    return this.auth.login(dto, reqCtx(req));
  }

  @Public()
  @HttpCode(200)
  @Post('refresh')
  refresh(
    @Body(new ZodValidationPipe(refreshSchema)) dto: { refreshToken: string },
    @Req() req: Request,
  ) {
    if (!dto.refreshToken) throw new UnauthorizedException();
    return this.auth.refresh(dto.refreshToken, reqCtx(req));
  }

  @Public()
  @HttpCode(204)
  @Post('logout')
  async logout(
    @Body(new ZodValidationPipe(refreshSchema)) dto: { refreshToken: string },
  ): Promise<void> {
    await this.auth.logout(dto.refreshToken);
  }

  @Get('me')
  me(@CurrentUser('id') userId: string) {
    return this.auth.me(userId);
  }
}
