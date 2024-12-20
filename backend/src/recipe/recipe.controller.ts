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
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { RecipeFilterParams } from 'src/repositories/recipe.repository';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CurrentUser } from 'src/auth/current-user-decorator';
import { TokenSchema } from 'src/auth/jwt.strategy';
import { ApiPaginatedResponse } from 'src/commom/decorator/ApiPaginatedResponse';
import { RecipeDto } from './dto/recipe.dto';
import { Recipes } from '@prisma/client';

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
  @HttpCode(201)
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createRecipeDto: CreateRecipeDto,
    @CurrentUser() user: TokenSchema,
  ): Promise<Recipes> {
    return this.recipeService.create(createRecipeDto, user.sub.id);
  }

  @Get()
  @ApiPaginatedResponse(RecipeDto)
  async filterRecipes(
    @Query() filterParams: RecipeFilterParams,
    @Query('page') page: number,
  ) {
    const take = 8;
    const skip = (page - 1) * take;
    return this.recipeService.filterRecipes(filterParams, skip, take);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipeService.update(+id, updateRecipeDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.recipeService.remove(+id);
  }

  @Get('/my-recipes')
  @UseGuards(JwtAuthGuard)
  async getMyRecipes(@CurrentUser() user: TokenSchema) {
    return this.recipeService.findByUser(user.sub.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.recipeService.findOne(+id);
  }
}
