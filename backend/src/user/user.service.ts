import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from 'src/repositories/user.repository';
import { hash } from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    const { email, password } = createUserDto;
    const userWithSameEmail = await this.userRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new ConflictException(
        'Já existe um usuário com este endereço de e-mail.',
      );
    }

    const hashedPassword = await hash(password, 8);

    await this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
  }

  findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  async findOne(id: string) {
    const user = await this.userRepository.find<
      Prisma.UserWhereInput,
      Prisma.UserInclude
    >({
      id,
    });

    if (!user) {
      throw new BadRequestException('Usuário não encontrado.');
    }
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update<
      Prisma.UserUncheckedUpdateInput,
      Prisma.UserWhereUniqueInput
    >(
      {
        ...updateUserDto,
      },
      { id },
    );
  }
}
