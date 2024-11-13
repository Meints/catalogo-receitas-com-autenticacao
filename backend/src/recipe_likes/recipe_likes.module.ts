import { Module } from '@nestjs/common';
import { RecipeLikesService } from './recipe_likes.service';
import { RecipeLikesController } from './recipe_likes.controller';

@Module({
  controllers: [RecipeLikesController],
  providers: [RecipeLikesService],
})
export class RecipeLikesModule {}
