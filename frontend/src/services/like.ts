import { ILike } from '../interfaces/schema'
import http from '../lib/http'

export const LikeService = {
  toggleLike: async (recipeId: number) => {
    const response = await http.post<ILike>('/recipe-likes', {
      recipeId,
    })
    return response.data
  },

  getRecipeLikes: async () => {
    const response = await http.get<ILike[]>('/recipe-likes/me')
    return response.data
  },
}
