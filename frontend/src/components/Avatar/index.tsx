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

export function Avatar() {
  return (
    <MenubarRoot>
      <Menubar.Menu>
        <MenubarTrigger asChild>
          <AvatarRoot>
            <AvatarImage
              src="https://github.com/Meints.png"
              alt="Avatar do usuário"
            />
            <AvatarFallback>AB</AvatarFallback>
          </AvatarRoot>
        </MenubarTrigger>

        <MenubarContent>
          <LinkMenu to="/profile">
            <MenubarItem>Perfil</MenubarItem>
          </LinkMenu>
          <LinkMenu to="/my-recipes">
            <MenubarItem>Minhas receitas</MenubarItem>
          </LinkMenu>
          <LinkMenu to="/liked-recipes">
            <MenubarItem>Receitas curtidas</MenubarItem>
          </LinkMenu>
          <MenubarSeparator />
          <MenubarItem>Sair</MenubarItem>
        </MenubarContent>
      </Menubar.Menu>
    </MenubarRoot>
  )
}
