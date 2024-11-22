import LogoImg from '../../assets/logo.png'
import { HeaderContainer, Logo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={LogoImg} alt="Logo" />
    </HeaderContainer>
  )
}
