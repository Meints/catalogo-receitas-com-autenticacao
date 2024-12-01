import { BadRequestException, Injectable } from '@nestjs/common';
import { AwsService } from 'src/aws/aws.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import {
  RecipeFilterParams,
  RecipeRepository,
} from 'src/repositories/recipe.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class RecipeService {
  constructor(
    private readonly recipeRepository: RecipeRepository,
    private readonly awsService: AwsService,
  ) {}

  async create(createRecipeDto: CreateRecipeDto, userId: string) {
    const recipeData = {
      ...createRecipeDto,
      userId,
    };

    const recipe = await this.recipeRepository.create(recipeData);
    return recipe;
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

  findAll() {
    return this.recipeRepository.findMany<
      Prisma.RecipesWhereInput,
      Prisma.RecipesInclude,
      Prisma.RecipesOrderByRelationAggregateInput
    >({ isDeleted: false });
  }

  filterRecipes(filterParams: RecipeFilterParams, skip: number, take: number) {
    return this.recipeRepository.findRecipes(filterParams, skip, take);
  }

  remove(id: number) {
    return this.recipeRepository.softDelete({ id });
  }

  async findByUser(userId: string) {
    return await this.recipeRepository.findMany<
      Prisma.RecipesWhereInput,
      Prisma.RecipesInclude,
      Prisma.RecipesOrderByRelationAggregateInput
    >({ isDeleted: false, userId });
  }

  findOne(id: number) {
    return this.recipeRepository.find<
      Prisma.RecipesWhereInput,
      Prisma.RecipesInclude
    >({ id });
  }

  async createFile(file: Express.Multer.File, recipeId: number) {
    const recipe = await this.recipeRepository.find({ id: recipeId });
    const photoKey = recipe?.photoKey
      ? recipe.photoKey
      : this.awsService.createPhotoKeyRecipe(
          recipeId,
          file.mimetype.split('/')[1],
        );
    await this.awsService.updatePhoto(file, photoKey);
    return this.recipeRepository.update({ photoKey }, { id: recipeId });
  }

  async getSignedURL(id: number) {
    const recipe = await this.recipeRepository.find({ id });
    if (!recipe) {
      throw new BadRequestException('Receita não encontrada');
    }
    const signedUrl = await this.awsService.getStoredObject(
      recipe.photoKey as string,
    );
    return { signedUrl };
  }
}
