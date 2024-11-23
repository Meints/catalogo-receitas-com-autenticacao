import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Insira um e-mail válido' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
})

export interface ILoginFields {
  email: string
  password: string
}
