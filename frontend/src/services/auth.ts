import http from '../lib/http'

export interface ILoginResponse {
  access_token: string
  id: string
  email: string
}

export const AuthService = {
  login: async (email: string, password: string) => {
    return await http.post<ILoginResponse>('auth', { email, password })
  },
}
