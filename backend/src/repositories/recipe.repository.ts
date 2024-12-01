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
    page: number,
    perPage: number,
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

    const skip = (page - 1) * perPage;
    const take = perPage;

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
        lastPage: Math.ceil(totalCount / perPage),
        currentPage: page,
        perPage,
        prev: page > 1 ? page - 1 : null,
        next:
          page * perPage < totalCount && page < Math.ceil(totalCount / perPage)
            ? page + 1
            : null,
      },
    };
  }
}
