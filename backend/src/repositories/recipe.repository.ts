import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseRepository } from './base.repository';
import { Difficulty, Prisma, Recipes, Tags } from '@prisma/client';
import { OrderBy } from 'src/enum/orderby';

export interface RecipeFilterParams {
  title?: string;
  tags?: Tags[];
  difficulty?: Difficulty;
  prepTime?: number;
  orderBy?: OrderBy;
}

@Injectable()
export class RecipeRepository extends BaseRepository<Recipes> {
  constructor(prisma: PrismaService) {
    super(prisma, 'recipes');
  }

  async filterRecipes({
    title,
    difficulty,
    prepTime,
    tags,
    orderBy,
  }: RecipeFilterParams): Promise<Recipes[] | null> {
    const where: any = { isDeleted: false };

    if (title) {
      where.title = { contains: title, mode: 'insensitive' };
    }

    if (difficulty) {
      where.difficulty = difficulty;
    }

    if (prepTime) {
      where.prepTime = prepTime;
    }

    if (tags && tags.length > 0) {
      where.tags = {
        hasSome: tags,
      };
    }

    let order;
    if (orderBy === OrderBy.MostPopular) {
      order = {
        likes: {
          _count: 'desc',
        },
      };
    } else if (orderBy === OrderBy.MostRecent) {
      order = {
        createdAt: 'desc',
      };
    }

    return this.findMany<
      Prisma.RecipesUncheckedUpdateInput,
      Prisma.RecipesWhereUniqueInput,
      Prisma.RecipesOrderByWithAggregationInput
    >(where, undefined, order);
  }
}
