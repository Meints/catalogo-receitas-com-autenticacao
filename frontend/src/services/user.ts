import { ISuccessResponse } from '../interfaces/routes'
import { IUser } from '../interfaces/schema'
import http from '../lib/http'
import { UpdateUserForm } from '../pages/user/profile/validation'

type SignUpData = {
  name: string
  email: string
  password: string
}

export const UserService = {
  signUp: async ({ name, email, password }: SignUpData) => {
    const response = await http.post<ISuccessResponse>('/user', {
      name,
      email,
      password,
    })
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

  uploadUserPhoto: async (userId: string, file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    const response = await http.post<ISuccessResponse>(
      `/user/${userId}/file`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    return response.data
  },

  getSignedUrl: async (userId: string): Promise<string> => {
    const response = await http.get<{ signedUrl: string }>(
      `/user/signed_url/${userId}`,
    )
    return response.data.signedUrl
  },
}
