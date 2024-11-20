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
import { AwsService } from 'src/aws/aws.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly awsService: AwsService,
  ) {}

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

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      const hashedPassword = await hash(updateUserDto.password, 8);
      updateUserDto.password = hashedPassword;
    }

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

  async createFile(file: Express.Multer.File, userId: string) {
    const user = await this.userRepository.find({ id: userId });
    const photoKey = user?.photoKey
      ? user.photoKey
      : this.awsService.createPhotoKeyUser(userId, file.mimetype.split('/')[1]);
    await this.awsService.updatePhoto(file, photoKey);
    return this.userRepository.update({ photoKey }, { id: userId });
  }

  async getSignedURL(id: string) {
    const user = await this.userRepository.find({ id });
    if (!user) {
      throw new BadRequestException('Usuário não encontrado');
    }
    const signedUrl = await this.awsService.getStoredObject(
      user.photoKey as string,
    );
    return { signedUrl };
  }
}
