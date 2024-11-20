import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from 'src/repositories/user.repository';
import { AwsService } from 'src/aws/aws.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, AwsService],
  exports: [UserRepository, UserService],
})
export class UserModule {}
