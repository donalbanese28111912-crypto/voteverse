import { Body, Controller, Get, Param, Patch, Query, UseGuards } from '@nestjs/common';
import { CurrentUser, Public } from '../common/decorators';
import { JwtAuthGuard } from '../common/guards';
import { ZodValidationPipe } from '../common/zod-validation.pipe';
import { UsersService, updateProfileSchema } from './users.service';
import type { z } from 'zod';

@Controller({ path: 'users', version: '1' })
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Public()
  @Get(':username')
  profile(@Param('username') username: string) {
    return this.users.publicProfile(username);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('me/profile')
  update(
    @CurrentUser('id') userId: string,
    @Body(new ZodValidationPipe(updateProfileSchema))
    dto: z.infer<typeof updateProfileSchema>,
  ) {
    return this.users.updateProfile(userId, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me/activity')
  activity(
    @CurrentUser('id') userId: string,
    @Query('limit') limit?: string,
  ) {
    return this.users.myActivity(userId, Math.min(100, Number(limit) || 30));
  }
}
