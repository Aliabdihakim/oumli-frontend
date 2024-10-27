import { z } from "zod";

const RegisterUserResponseSchema = z.object({
  message: z.string(),
  userId: z.number().int(),
});

type RegisterUserResponse = z.infer<typeof RegisterUserResponseSchema>;

type RegisterUserData = {
  name: string;
  email: string;
  password: string;
};

const UserSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string().email(),
});

const LoginUserResponseSchema = z.object({
  message: z.string(),
  token: z.string(),
  user: UserSchema,
});

type LoginUserResponse = z.infer<typeof LoginUserResponseSchema>;

type LoginUserData = {
  email: string;
  password: string;
};

export { RegisterUserResponseSchema, LoginUserResponseSchema };
export type {
  RegisterUserResponse,
  RegisterUserData,
  LoginUserData,
  LoginUserResponse,
};
