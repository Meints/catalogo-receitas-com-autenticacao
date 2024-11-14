import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { RecipeRepository } from 'src/repositories/recipe.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class RecipeService {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  create(createRecipeDto: CreateRecipeDto) {
    return 'This action adds a new recipe';
  }

  findOne(id: number) {
    return this.recipeRepository.find({ id });
  }

  findAll() {
    return `This action returns all recipe`;
  }

  findTags() {}

  findDifficulty() {}

  findPrepTime() {}

  findByTitle() {}

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return this.recipeRepository.update<
      Prisma.RecipesUncheckedUpdateInput,
      Prisma.RecipesWhereUniqueInput
    >(
      {
        ...updateRecipeDto,
      },
      { id },
    );
  }

  remove(id: number) {
    return this.remove(id);
  }
}
