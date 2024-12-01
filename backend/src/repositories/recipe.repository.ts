import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseRepository } from './base.repository';
import { Difficulty, Prisma, Recipes, Tags } from '@prisma/client';
import { OrderBy } from 'src/enum/orderby';
import { PaginatedOutputDto } from 'src/commom/dtos/paginated-output.dto';

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

  async findRecipes(
    {
      title,
      difficulty,
      ingredients,
      prepTime,
      tags,
      orderBy,
    }: RecipeFilterParams,
    skip: number,
    take: number,
  ): Promise<PaginatedOutputDto> {
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

    const totalCount = await this.prisma.recipes.count({
      where,
    });

    const recipes = await this.prisma.recipes.findMany({
      where,
      include: {
        _count: {
          select: { likes: true },
        },
      },
      orderBy: order,
      skip,
      take,
    });

    return {
      data: recipes,
      meta: {
        total: totalCount,
        currentPage: Math.ceil(skip / take) + 1,
        perPage: take,
        lastPage: Math.ceil(totalCount / take),
        prev: skip > 0 ? Math.ceil(skip / take) : null,
        next:
          skip + take < totalCount ? Math.ceil((skip + take) / take) + 1 : null,
      },
    };
  }
}
