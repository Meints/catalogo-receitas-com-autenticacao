import * as Menubar from '@radix-ui/react-menubar'
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  MenubarContent,
  MenubarRoot,
  MenubarTrigger,
  MenubarItem,
  MenubarSeparator,
  LinkMenu,
} from './styles'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { UserService } from '../../services/user'

export function Avatar() {
  const { logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const [userImage, setUserImage] = useState<string | undefined>(undefined)
  const [userName, setUserName] = useState<string | null>(null)

  const getInitials = (name: string) => {
    const nameParts = name.split(' ')
    if (nameParts.length === 1) {
      return nameParts[0].substring(0, 2).toUpperCase()
    }
    return (nameParts[0][0] + nameParts[1][0]).toUpperCase()
  }

  useEffect(() => {
    if (isAuthenticated) {
      const fetchUserData = async () => {
        try {
          const data = await UserService.getProfile()
          setUserName(data.name)

          if (data.photoKey) {
            const signedUrl = await UserService.getSignedUrl(data.id)
            if (typeof signedUrl === 'string' && signedUrl.trim()) {
              setUserImage(signedUrl)
            }
          } else {
            setUserImage(undefined)
          }
        } catch (error) {
          console.error(error)
        }
      }

      fetchUserData()
    }
  }, [isAuthenticated])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  if (!isAuthenticated) {
    return (
      <MenubarRoot>
        <Menubar.Menu>
          <MenubarTrigger asChild>
            <AvatarRoot>
              <AvatarFallback>?</AvatarFallback>
            </AvatarRoot>
          </MenubarTrigger>

          <MenubarContent>
            <MenubarItem onClick={() => navigate('/login')}>
              Realizar login
            </MenubarItem>
          </MenubarContent>
        </Menubar.Menu>
      </MenubarRoot>
    )
  }

  return (
    <MenubarRoot>
      <Menubar.Menu>
        <MenubarTrigger asChild>
          <AvatarRoot>
            <AvatarImage src={userImage} alt="Avatar do usuário" />
            <AvatarFallback>
              {userName ? getInitials(userName) : 'AA'}
            </AvatarFallback>
          </AvatarRoot>
        </MenubarTrigger>

        <MenubarContent>
          <LinkMenu to="/user/profile">
            <MenubarItem>Perfil</MenubarItem>
          </LinkMenu>
          <LinkMenu to="/user/create-recipe">
            <MenubarItem>Cadastrar receita</MenubarItem>
          </LinkMenu>
          <LinkMenu to="/user/my-recipes">
            <MenubarItem>Minhas receitas</MenubarItem>
          </LinkMenu>
          <LinkMenu to="/user/liked-recipes">
            <MenubarItem>Receitas curtidas</MenubarItem>
          </LinkMenu>
          <MenubarSeparator />
          <MenubarItem onClick={handleLogout}>Sair</MenubarItem>
        </MenubarContent>
      </Menubar.Menu>
    </MenubarRoot>
  )
}
