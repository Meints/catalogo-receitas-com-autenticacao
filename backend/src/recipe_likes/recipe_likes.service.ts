import { Injectable } from '@nestjs/common';
import { CreateRecipeLikesDto } from './dto/create-recipe_like.dto';
import { RecipeLikesRepository } from 'src/repositories/recipe-likes.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class RecipeLikesService {
  constructor(private readonly recipeLikesRepository: RecipeLikesRepository) {}

  async create(
    createRecipeLikeDto: CreateRecipeLikesDto,
    userId: string,
  ): Promise<void | string> {
    const existingLike = await this.recipeLikesRepository.find<
      Prisma.RecipeLikesWhereInput,
      Prisma.RecipeLikesInclude
    >({ recipeId: createRecipeLikeDto.recipeId, userId: userId });

    if (existingLike) {
      await this.recipeLikesRepository.remove<Prisma.RecipeLikesWhereUniqueInput>(
        existingLike,
      );
      return 'deleted';
    } else {
      await this.recipeLikesRepository.create<Prisma.RecipeLikesCreateInput>({
        recipe: {
          connect: {
            id: createRecipeLikeDto.recipeId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      });
    }
  }

  findAll(filter: Prisma.RecipeLikesWhereInput) {
    return this.recipeLikesRepository.findMany<
      Prisma.RecipeLikesWhereInput,
      Prisma.RecipeLikesInclude,
      Prisma.RecipeLikesOrderByRelationAggregateInput
    >(filter, { recipe: true });
  }
}
