import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { RecipeRepository } from 'src/repositories/recipe.repository';

@Module({
  controllers: [RecipeController],
  providers: [RecipeService, RecipeRepository],
  exports: [RecipeRepository],
})
export class RecipeModule {}
