import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipeLikesService } from './recipe_likes.service';
import { CreateRecipeLikeDto } from './dto/create-recipe_like.dto';
import { UpdateRecipeLikeDto } from './dto/update-recipe_like.dto';

@Controller('recipe-likes')
export class RecipeLikesController {
  constructor(private readonly recipeLikesService: RecipeLikesService) {}

  @Post()
  create(@Body() createRecipeLikeDto: CreateRecipeLikeDto) {
    return this.recipeLikesService.create(createRecipeLikeDto);
  }

  @Get()
  findAll() {
    return this.recipeLikesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeLikesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipeLikeDto: UpdateRecipeLikeDto) {
    return this.recipeLikesService.update(+id, updateRecipeLikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipeLikesService.remove(+id);
  }
}
