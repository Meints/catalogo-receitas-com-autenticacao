import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RecipeModule } from './recipe/recipe.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { envSchema } from './env';
import { AuthModule } from './auth/auth.module';
import { RecipeLikesModule } from './recipe_likes/recipe_likes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    RecipeModule,
    UserModule,
    PrismaModule,
    AuthModule,
    RecipeLikesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
