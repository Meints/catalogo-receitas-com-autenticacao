import { ISuccessResponse } from '../interfaces/routes'
import { IRecipe } from '../interfaces/schema'
import http from '../lib/http'
import { CreateRecipeForm } from '../pages/create-recipe/validation'
import { Recipe } from '../types/models'

export const RecipeService = {
  create: async (data: CreateRecipeForm) => {
    const response = await http.post<ISuccessResponse>('/recipes', data)
    return response.data
  },

  update: async (data: IRecipe) => {
    const response = await http.patch<IRecipe>('/recipes', data)
    return response.data
  },

  getMyRecipes: async (): Promise<Recipe[]> => {
    const response = await http.get<Recipe[]>('/recipes/my-recipes')
    return response.data
  },
}
