import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseRepository } from './base.repository';
import { User } from '@prisma/client';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(prisma: PrismaService) {
    super(prisma, 'user');
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.find({ email });
  }
}
