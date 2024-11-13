import { Difficulty, Tags } from '@prisma/client';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const createRecipeSchema = z.object({
  title: z.string().min(2),
  preparationTime: z.number().int().positive(),
  difficulty: z.nativeEnum(Difficulty),
  instructions: z.string(),
  ingredients: z.string(),
  tags: z.array(z.nativeEnum(Tags)),
});

export class CreateRecipeDto extends createZodDto(createRecipeSchema) {}
