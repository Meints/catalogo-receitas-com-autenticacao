import useLocalStorage from '../hooks/UseLocalStorage'
import { AuthService, ILoginResponse } from '../services/auth'
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
  useCallback,
} from 'react'

interface AuthContextType {
  token: string | null
  isAuthenticated: boolean
  login: (email: string, senha: string) => Promise<ILoginResponse>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [token, setToken] = useLocalStorage<string | null>('token', null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (storedToken && storedToken !== 'undefined') {
      setToken(JSON.parse(storedToken))
    } else {
      setToken(null)
    }
    setLoading(false)
  }, [setToken])

  const login = useCallback(
    async (email: string, senha: string) => {
      const response = await AuthService.login(email, senha)
      setToken(response.data.access_token)
      return response.data
    },
    [setToken],
  )

  const logout = useCallback(() => {
    setToken(null)
  }, [setToken])

  const isAuthenticated = useMemo(() => !!token, [token])

  const value = useMemo(
    () => ({ token, isAuthenticated, login, logout }),
    [token, isAuthenticated, login, logout],
  )

  if (loading) {
    return <div>Loading...</div>
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
