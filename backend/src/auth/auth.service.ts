import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthenticateDTO } from './dto/authenticate.dto';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly userService: UserService,
  ) {}

  async authenticate(authenticateBody: AuthenticateDTO) {
    const user = await this.userService.findByEmail(authenticateBody.email);

    const isValidPassword = await compare(
      authenticateBody.password,
      user?.password ?? '',
    );

    if (!user || !isValidPassword) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const token = this.jwt.sign({
      sub: {
        id: user.id,
        email: user.email,
      },
    });

    return {
      access_token: token,
    };
  }
}
