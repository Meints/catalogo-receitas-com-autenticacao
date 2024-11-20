import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
  ParseIntPipe,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { RecipeFilterParams } from 'src/repositories/recipe.repository';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post(':id/file')
  @UseInterceptors(FileInterceptor('file'))
  async createFile(
    @UploadedFile() file: Express.Multer.File,
    @Param('id', ParseIntPipe) id: number,
  ) {
    await this.recipeService.createFile(file, +id);
    return { success: true };
  }

  @Get(':signed_url/:id')
  getSignedURL(@Param('id', ParseIntPipe) id: number) {
    return this.recipeService.getSignedURL(id);
  }

  @Post()
  async create(
    @Body() createRecipeDto: CreateRecipeDto,
  ): Promise<SuccessResponseDTO> {
    this.recipeService.create(createRecipeDto);
    return { success: true };
  }

  @Get()
  async filterRecipes(@Query() filterParams: RecipeFilterParams) {
    return this.recipeService.filterRecipes(filterParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipeService.update(+id, updateRecipeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipeService.remove(+id);
  }
}
