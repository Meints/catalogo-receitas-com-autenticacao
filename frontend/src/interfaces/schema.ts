import { DifficultyRecipe, Recipe, TagsRecipe } from '../types/models'

export interface IRecipe {
  id: number
  userId: string
  title: string
  preparationTime: number
  difficulty: DifficultyRecipe
  isDeleted: boolean
  deletedAt: Date
  instructions: string
  ingredients: string
  tags: TagsRecipe[]
  createdAt: Date
  updatedAt: Date
  photoKey: string
}

export interface ILike {
  id: string
  userId: string
  recipeId: number
  recipe: Recipe
}

export interface IUser {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
  photoKey: string
  recipes: IRecipe[]
  likes: ILike[]
}
