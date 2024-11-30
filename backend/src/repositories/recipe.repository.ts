import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseRepository } from './base.repository';
import { Difficulty, Prisma, Recipes, Tags } from '@prisma/client';
import { OrderBy } from 'src/enum/orderby';

export interface RecipeFilterParams {
  title?: string;
  tags?: Tags;
  ingredients?: string;
  difficulty?: Difficulty;
  prepTime?: number;
  orderBy?: OrderBy;
}

@Injectable()
export class RecipeRepository extends BaseRepository<Recipes> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, 'recipes');
  }

  async findRecipes({
    title,
    difficulty,
    ingredients,
    prepTime,
    tags,
    orderBy,
  }: RecipeFilterParams): Promise<Recipes[] | null> {
    const where: Prisma.RecipesWhereInput = { isDeleted: false };

    if (title) {
      where.title = { contains: title, mode: 'insensitive' };
    }

    if (ingredients) {
      where.ingredients = { contains: ingredients, mode: 'insensitive' };
    }

    if (difficulty) {
      where.difficulty = difficulty;
    }

    if (prepTime) {
      where.preparationTime = Number(prepTime);
    }

    if (tags && tags.length > 0) {
      where.tags = {
        hasSome: tags.split(',') as Tags[],
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

    return this.prisma.recipes.findMany({
      where,
      include: {
        _count: {
          select: { likes: true },
        },
      },
      orderBy: order,
    });
  }
}
