import { z } from 'zod'

export const updateUserSchema = z.object({
  name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres.'),
  email: z.string().email('E-mail inválido.'),
  password: z
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres.')
    .optional(),
})

export type UpdateUserForm = z.infer<typeof updateUserSchema>
