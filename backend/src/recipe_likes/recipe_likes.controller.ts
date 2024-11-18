import { Controller, Get, Post, Body } from '@nestjs/common';
import { RecipeLikesService } from './recipe_likes.service';
import { CreateRecipeLikesDto } from './dto/create-recipe_like.dto';

@Controller('recipe-likes')
export class RecipeLikesController {
  constructor(private readonly recipeLikesService: RecipeLikesService) {}

  @Post()
  create(@Body() createRecipeLikeDto: CreateRecipeLikesDto) {
    return this.recipeLikesService.create(createRecipeLikeDto);
  }

  @Get()
  findAll() {
    return this.recipeLikesService.findAll();
  }
}
