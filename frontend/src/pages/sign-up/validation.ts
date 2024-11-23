import { z } from 'zod'

export const createUserSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' }),
  email: z.string().email({ message: 'Insira um e-mail válido' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
  confirmPassword: z.string().min(6),
})

export type CreateUserForm = z.infer<typeof createUserSchema>
