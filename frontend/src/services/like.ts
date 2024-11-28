import { ILike } from '../interfaces/schema'
import http from '../lib/http'

export const LikeService = {
  addLike: async (recipeId: number, userId: string) => {
    const response = await http.post<ILike>('/recipe-likes', {
      recipeId,
      userId,
    })
    return response.data
  },

  removeLike: async (recipeId: number, userId: string) => {
    const response = await http.delete<ILike>(`/recipe-likes/${recipeId}`, {
      data: {
        userId,
      },
    })
    return response.data
  },
}
