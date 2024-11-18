import { Module } from '@nestjs/common';
import { RecipeLikesService } from './recipe_likes.service';
import { RecipeLikesController } from './recipe_likes.controller';
import { RecipeLikesRepository } from 'src/repositories/recipe-likes.repository';

@Module({
  controllers: [RecipeLikesController],
  providers: [RecipeLikesService, RecipeLikesRepository],
  exports: [RecipeLikesRepository],
})
export class RecipeLikesModule {}
