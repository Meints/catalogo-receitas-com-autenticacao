import { ISuccessResponse } from '../interfaces/routes'
import { IUser } from '../interfaces/schema'
import http from '../lib/http'
import { CreateUserForm } from '../pages/sign-up/validation'
import { UpdateUserForm } from '../pages/user/profile/validation'

export const UserService = {
  signUp: async (data: CreateUserForm) => {
    const response = await http.post<ISuccessResponse>('/user', data)
    return response.data
  },

  update: async (data: UpdateUserForm) => {
    const response = await http.patch<IUser>(`/user`, data)
    return response.data
  },

  getProfile: async () => {
    const response = await http.get<IUser>('/user')
    return response.data
  },

  getSignedUrl: async (userId: string): Promise<string> => {
    const response = await http.get<{ signedUrl: string }>(
      `/user/signed_url/${userId}`,
    )
    return response.data.signedUrl
  },
}
