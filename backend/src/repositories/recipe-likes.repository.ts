import { RecipeLikes } from '@prisma/client';
import { BaseRepository } from './base.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipeLikesRepository extends BaseRepository<RecipeLikes> {
  constructor(prisma: PrismaService) {
    super(prisma, 'recipeLikes');
  }
}
