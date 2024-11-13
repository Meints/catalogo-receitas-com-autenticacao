import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticateDTO } from './dto/authenticate.dto';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async authenticate(@Body() body: AuthenticateDTO) {
    return this.authService.authenticate(body);
  }
}
