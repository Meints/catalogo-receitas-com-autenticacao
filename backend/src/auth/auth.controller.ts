import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthenticateDTO } from './dto/authenticate.dto';
import { AuthService } from './auth.service';
import { CreateSupporterDto } from './dto/create-account.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly jwt: JwtService) {}

  @Post()
  async authenticate(@Body() body: AuthenticateDTO) {
    return this.authService.authenticate(body);
  }

  @Post('signUp')
  createSupporter(@Body() body: CreateSupporterDto) {
    return this.authService.createSupporter(body);
  }
}
