import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseRepository } from './base.repository';
import { Difficulty, Recipes, Tags } from '@prisma/client';

@Injectable()
export class RecipeRepository extends BaseRepository<Recipes> {
  constructor(prisma: PrismaService) {
    super(prisma, 'recipes');
  }

  async findAll(): Promise<Recipes[]> {
    return this.findMany({});
  }

  async findTags(tags: Tags[]): Promise<Recipes[] | null> {
    return this.findMany({
      tags: {
        hasSome: tags,
      },
    });
  }

  async findDifficulty(difficulty: Difficulty): Promise<Recipes[] | null> {
    return this.findMany({
      where: {
        difficulty,
        isDeleted: false,
      },
    });
  }

  async findPrepTime(prepTime: number): Promise<Recipes[] | null> {
    return this.findMany({
      prepTime,
    });
  }

  async findByTitle(title: string): Promise<Recipes[] | null> {
    return this.findMany({
      title: {
        contains: title,
      },
    });
  }

  async findMostPopular(): Promise<Recipes[]> {
    return this.findMany({
      orderBy: {
        likes: {
          _count: 'desc',
        },
      },
      include: {
        likes: true,
      },
    });
  }

  async delete(id: number) {
    return this.softDelete({ id });
  }
}
