import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { RecipeLikesService } from './recipe_likes.service';
import { CreateRecipeLikesDto } from './dto/create-recipe_like.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CurrentUser } from 'src/auth/current-user-decorator';
import { TokenSchema } from 'src/auth/jwt.strategy';

@Controller('/recipe-likes')
@UseGuards(JwtAuthGuard)
export class RecipeLikesController {
  constructor(private readonly recipeLikesService: RecipeLikesService) {}

  @Post()
  async create(
    @Body() createRecipeLikeDto: CreateRecipeLikesDto,
    @CurrentUser() user: TokenSchema,
  ) {
    await this.recipeLikesService.create(createRecipeLikeDto, user.sub.id);
    return { success: true };
  }

  @Get('me')
  findAll(@CurrentUser() user: TokenSchema) {
    return this.recipeLikesService.findAll({ userId: user.sub.id });
  }
}
