export type User = {
  id: string
  name: string
  email: string
  password: string
  createdAt: string
  updatedAt: string
}

export enum DifficultyRecipe {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export enum TagsRecipe {
  VEGAN = 'vegan',
  VEGETARIAN = 'vegetarian',
  GLUTEN_FREE = 'gluten_free',
  DAIRY_FREE = 'dairy_free',
  LOW_CARB = 'low_carb',
  SUGAR_FREE = 'sugar_free',
  HIGH_PROTEIN = 'high_protein',
  RAW = 'raw',
  QUICK_MEAL = 'quick_meal',
  LOW_CALORIE = 'low_calorie',
  SPICY = 'spicy',
  SWEET = 'sweet',
  SAVORY = 'savory',
  DESSERT = 'dessert',
  BREAKFAST = 'breakfast',
  SNACK = 'snack',
  BUDGET_FRIENDLY = 'budget_friendly',
  SMOOTHIE = 'smoothie',
  SOUP = 'soup',
  SALAD = 'salad',
  GRILLED = 'grilled',
  BAKED = 'baked',
  FRIED = 'fried',
  FERMENTED = 'fermented',
  HEALTHY = 'healthy',
  GOURMET = 'gourmet',
}

export type Recipe = {
  id: number
  userId: string
  title: string
  preparationTime: int
  difficulty: DifficultyRecipe
  instruction: string
  ingredients: string
  tags: TagsRecipe[]
  isDeleted: boolean
  deletedAt: Date
  createdAt: Date
  updatedAt: Date
}
