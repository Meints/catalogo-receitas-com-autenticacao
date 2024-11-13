import { Injectable } from '@nestjs/common';
import { CreateRecipeLikeDto } from './dto/create-recipe_like.dto';
import { UpdateRecipeLikeDto } from './dto/update-recipe_like.dto';

@Injectable()
export class RecipeLikesService {
  create(createRecipeLikeDto: CreateRecipeLikeDto) {
    return 'This action adds a new recipeLike';
  }

  findAll() {
    return `This action returns all recipeLikes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipeLike`;
  }

  update(id: number, updateRecipeLikeDto: UpdateRecipeLikeDto) {
    return `This action updates a #${id} recipeLike`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipeLike`;
  }
}
