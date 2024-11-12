import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthenticateDTO } from './dto/authenticate.dto';
import * as bcrypt from 'bcryptjs';
import { CreateSupporterDto } from './dto/create-account.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly userService: UserService,
  ) {}

  async authenticate(authenticateBody: AuthenticateDTO) {
    const user = await this.userService.findByEmail(authenticateBody.email);

    const isValidPassword = await bcrypt.compare(
      authenticateBody.password,
      user?.password ?? '',
    );

    if (!user || !isValidPassword) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const token = this.jwt.sign({
      id: user.id,
      sub: {
        name: user.name,
        email: user.email,
      },
    });

    return {
      token,
    };
  }

  async createSupporter(createSupporterDto: CreateSupporterDto) {
    await this.userService.create(createSupporterDto);
  }
}
