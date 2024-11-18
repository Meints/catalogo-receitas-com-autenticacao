import { Injectable } from '@nestjs/common';
import { CreateRecipeLikesDto } from './dto/create-recipe_like.dto';
import { RecipeLikesRepository } from 'src/repositories/recipe-likes.repository';

@Injectable()
export class RecipeLikesService {
  constructor(private readonly recipeLikesRepository: RecipeLikesRepository) {}

  async create(createRecipeLikeDto: CreateRecipeLikesDto): Promise<void> {
    const existingLike = await this.recipeLikesRepository.find({
      where: {
        userId: createRecipeLikeDto.userId,
        recipeId: createRecipeLikeDto.recipeId,
      },
    });

    if (existingLike) {
      await this.recipeLikesRepository.remove(existingLike.id);
    } else {
      await this.recipeLikesRepository.create(createRecipeLikeDto);
    }
  }

  findAll() {
    return this.recipeLikesRepository.findMany({});
  }
}
