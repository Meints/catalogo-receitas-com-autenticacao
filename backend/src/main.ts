import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Env } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false,
  });

  const condigService: ConfigService<Env, true> = app.get(ConfigService);
  const port = condigService.get('PORT', { infer: true });

  await app.listen(process.env.PORT ?? port);
}
bootstrap();
