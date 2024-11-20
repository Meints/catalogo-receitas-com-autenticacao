import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { RecipeRepository } from 'src/repositories/recipe.repository';
import { AwsService } from 'src/aws/aws.service';

@Module({
  controllers: [RecipeController],
  providers: [RecipeService, RecipeRepository, AwsService],
  exports: [RecipeRepository],
})
export class RecipeModule {}
