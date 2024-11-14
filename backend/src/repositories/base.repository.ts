import { PrismaService } from 'src/prisma/prisma.service';

export class BaseRepository<T> {
  constructor(
    private readonly prisma: PrismaService,
    private readonly database: string,
  ) {
    this.prisma = prisma;
    this.database = database;
  }

  async create<U>(data: U): Promise<T> {
    return await this.prisma[this.database].create({ data });
  }

  async find<U, V>(condition: U, include?: V): Promise<T | null> {
    return await this.prisma[this.database].findFirst({
      where: {
        ...condition,
        isDeleted: false,
      },
      include,
    });
  }

  async findMany<U, V, W>(
    condition: U,
    include?: V,
    orderBy?: W,
  ): Promise<T[]> {
    return await this.prisma[this.database].findMany({
      where: {
        ...condition,
        isDeleted: false,
      },
      include,
      orderBy,
    });
  }

  async update<U, V>(data: U, where: V) {
    return await this.prisma[this.database].update({
      data: data,
      where: where,
    });
  }

  async softDelete<U>(where: U) {
    return await this.prisma[this.database].update({
      where,
      data: {
        isDeleted: true,
        deletedAt: new Date(),
      },
    });
  }
}
