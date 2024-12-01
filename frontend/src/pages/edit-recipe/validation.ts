import { z } from 'zod'
import { DifficultyRecipe, TagsRecipe } from '../../types/models'

export const updateRecipeSchema = z.object({
  title: z.string().min(3, 'O título deve ter no mínimo 3 caracteres.'),
  preparationTime: z
    .number()
    .min(1, 'O tempo de preparo deve ser maior que 0.')
    .int('O tempo de preparo deve ser um número inteiro.')
    .positive('O tempo de preparo deve ser positivo.'),
  difficulty: z.enum(
    Object.keys(DifficultyRecipe) as [keyof typeof DifficultyRecipe],
  ),
  ingredients: z
    .string()
    .min(3, 'Os ingredientes devem ter no mínimo 3 caracteres.'),
  instructions: z.string().min(1, 'O modo de preparo é obrigatório.'),
  tags: z
    .array(z.enum(Object.keys(TagsRecipe) as [keyof typeof TagsRecipe]))
    .optional(),
  photoKey: z.string().optional().or(z.literal('')),
})

export type UpdateUserForm = z.infer<typeof updateRecipeSchema>
