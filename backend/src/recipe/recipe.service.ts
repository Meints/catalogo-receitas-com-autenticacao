import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import {
  RecipeFilterParams,
  RecipeRepository,
} from 'src/repositories/recipe.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class RecipeService {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  async create(createRecipeDto: CreateRecipeDto) {
    const recipe = await this.recipeRepository.create(createRecipeDto);
    return recipe;
  }

  findOne(id: number) {
    return this.recipeRepository.find({ id });
  }

  findAll() {
    return this.recipeRepository.findMany({});
  }

  filterRecipes(filterParams: RecipeFilterParams) {
    return this.recipeRepository.filterRecipes(filterParams);
  }

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
    return this.recipeRepository.softDelete({ id });
  }
}
