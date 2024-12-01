import { ISuccessResponse } from '../interfaces/routes'
import { IRecipe } from '../interfaces/schema'
import http from '../lib/http'
import { CreateRecipeForm } from '../pages/create-recipe/validation'
import { UpdateRecipeForm } from '../pages/edit-recipe/validation'
import { Recipe } from '../types/models'

export const RecipeService = {
  create: async (data: CreateRecipeForm) => {
    const response = await http.post<IRecipe>('/recipes', data)
    return response.data
  },

  update: async (data: UpdateRecipeForm, recipeId: number) => {
    const response = await http.patch<IRecipe>(`/recipes/${recipeId}`, data)
    return response.data
  },

  remove: async (id: number) => {
    const response = await http.delete<ISuccessResponse>(`/recipes/${id}`)
    return response.data
  },

  getMyRecipes: async (): Promise<Recipe[]> => {
    const response = await http.get<Recipe[]>('/recipes/my-recipes')
    return response.data
  },

  getRecipeById: async (recipeId: number) => {
    const response = await http.get<Recipe>(`/recipes/${recipeId}`)
    return response.data
  },

  uploadRecipePhoto: async (recipeId: number, file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    const response = await http.post<ISuccessResponse>(
      `recipes/${recipeId}/file`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    return response.data
  },
}
