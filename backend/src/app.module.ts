import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { RecipeService } from './recipe/recipe.service';
import { RecipeModule } from './recipe/recipe.module';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [RecipeModule, UserModule],
  controllers: [UserController],
  providers: [PrismaService, RecipeService],
})
export class AppModule {}
