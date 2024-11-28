import { z } from 'zod'
import { DifficultyRecipe, TagsRecipe } from '../../types/models'

export const createRecipeSchema = z.object({
  title: z.string().min(3, 'O título deve ter no mínimo 3 caracteres.'),
  preparationTime: z.number().positive('O tempo de preparo deve ser positivo.'),
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
  photoKey: z.string().optional(),
})

export type CreateRecipeForm = z.infer<typeof createRecipeSchema>
