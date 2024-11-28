import { ISuccessResponse } from '../interfaces/routes'
import { IRecipe } from '../interfaces/schema'
import http from '../lib/http'
import { CreateRecipeForm } from '../pages/create-recipe/validation'

export const RecipeService = {
  create: async (data: CreateRecipeForm) => {
    const response = await http.post<ISuccessResponse>('/recipes', data)
    return response.data
  },

  update: async (data: IRecipe) => {
    const response = await http.patch<IRecipe>('/recipes', data)
    return response.data
  },
}
