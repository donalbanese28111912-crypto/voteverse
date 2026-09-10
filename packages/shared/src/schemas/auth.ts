import { z } from 'zod';

export const usernameSchema = z
  .string()
  .min(3)
  .max(24)
  .regex(/^[a-zA-Z0-9_]+$/, 'letters, numbers and underscore only');

export const passwordSchema = z
  .string()
  .min(10, 'use at least 10 characters')
  .max(200);

export const registerSchema = z.object({
  email: z.string().email().max(254),
  username: usernameSchema,
  password: passwordSchema,
});
export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email().max(254),
  password: z.string().min(1).max(200),
});
export type LoginInput = z.infer<typeof loginSchema>;

export const refreshSchema = z.object({
  refreshToken: z.string().min(10),
});

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface PublicUser {
  id: string;
  email: string;
  username: string;
  displayName: string | null;
  avatarUrl: string | null;
  bio: string | null;
  reputation: number;
  role: 'USER' | 'MODERATOR' | 'ADMIN';
  createdAt: string;
}
