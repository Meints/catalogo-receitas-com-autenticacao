import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpCode,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CurrentUser } from 'src/auth/current-user-decorator';
import { TokenSchema } from 'src/auth/jwt.strategy';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(':id/file')
  @UseInterceptors(FileInterceptor('file'))
  async createFile(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    await this.userService.createFile(file, id);
    return { success: true };
  }

  @Get('signed_url/:id')
  getSignedURL(@Param('id') id: string) {
    return this.userService.getSignedURL(id);
  }

  @Post()
  @HttpCode(201)
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<SuccessResponseDTO> {
    await this.userService.create(createUserDto);
    return { success: true };
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findOne(@CurrentUser() user: TokenSchema) {
    return this.userService.findOne(user.sub.id);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async update(
    @Body() updateUserDto: UpdateUserDto,
    @CurrentUser() user: TokenSchema,
  ): Promise<SuccessResponseDTO> {
    await this.userService.update(user.sub.id, updateUserDto);
    return { success: true };
  }
}
