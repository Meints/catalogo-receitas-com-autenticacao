import { Recipes } from '@prisma/client';

interface RecipeWithCount extends Recipes {
  _count: {
    likes: number;
  };
}

export class PaginatedOutputDto {
  data: RecipeWithCount[] = [];
  meta: {
    total: number;
    lastPage: number;
    currentPage: number;
    perPage: number;
    prev: number | null;
    next: number | null;
  } = {
    total: 0,
    lastPage: 0,
    currentPage: 1,
    perPage: 4,
    prev: null,
    next: null,
  };
}
