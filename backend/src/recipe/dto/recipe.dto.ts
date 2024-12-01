import { Difficulty, Tags } from '@prisma/client';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const recipeSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  preparationTime: z.number().int(),
  difficulty: z.nativeEnum(Difficulty),
  instructions: z.string(),
  ingredients: z.string(),
  tags: z.array(z.nativeEnum(Tags)),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export class RecipeDto extends createZodDto(recipeSchema) {}
