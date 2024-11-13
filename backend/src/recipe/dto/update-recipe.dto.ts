import { createRecipeSchema } from './create-recipe.dto';
import { createZodDto } from 'nestjs-zod';

const updateRecipeSchema = createRecipeSchema.partial();

export class UpdateRecipeDto extends createZodDto(updateRecipeSchema) {}
