export type User = {
  id: string
  name: string
  email: string
  password: string
  createdAt: string
  updatedAt: string
}

export enum DifficultyRecipe {
  EASY = 'fácil',
  MEDIUM = 'médio',
  HARD = 'difícil',
}

export enum TagsRecipe {
  VEGAN = 'vegano',
  VEGETARIAN = 'vegetariano',
  GLUTEN_FREE = 'sem glúten',
  DAIRY_FREE = 'sem lactose',
  LOW_CARB = 'baixo em carboidratros',
  SUGAR_FREE = 'sem açúcar',
  HIGH_PROTEIN = 'alto em proteínas',
  RAW = 'cru',
  QUICK_MEAL = 'refeição rápida',
  LOW_CALORIE = 'baixa caloria',
  SPICY = 'apimentado',
  SWEET = 'doce',
  SAVORY = 'salgado',
  DESSERT = 'sobremesa',
  BREAKFAST = 'café da manhã',
  SNACK = 'lanche',
  BUDGET_FRIENDLY = 'econômico',
  SMOOTHIE = 'vitamina',
  SOUP = 'sopa',
  SALAD = 'salada',
  GRILLED = 'grelhado',
  BAKED = 'assado',
  FRIED = 'frito',
  FERMENTED = 'fermentado',
  HEALTHY = 'saudável',
  GOURMET = 'gourmet',
}

export type Recipe = {
  id: number
  userId: string
  title: string
  preparationTime: number
  difficulty: keyof typeof DifficultyRecipe
  instruction: string
  ingredients: string
  tags: (keyof typeof TagsRecipe)[]
  isDeleted: boolean
  deletedAt: Date
  createdAt: Date
  updatedAt: Date
}
