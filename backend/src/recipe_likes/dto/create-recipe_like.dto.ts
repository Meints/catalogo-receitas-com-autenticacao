import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const createRecipeLikesSchema = z.object({
  recipeId: z.number(),
});

export class CreateRecipeLikesDto extends createZodDto(
  createRecipeLikesSchema,
) {}
