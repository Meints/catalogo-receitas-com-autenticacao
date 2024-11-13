import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipeLikeDto } from './create-recipe_like.dto';

export class UpdateRecipeLikeDto extends PartialType(CreateRecipeLikeDto) {}
