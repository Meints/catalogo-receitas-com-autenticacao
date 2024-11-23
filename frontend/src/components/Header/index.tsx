import { Link } from 'react-router-dom'
import LogoImg from '../../assets/logo.png'
import { Avatar } from '../Avatar'
import { HeaderContainer, Logo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={LogoImg} alt="Logo" />
      </Link>
      <Avatar />
    </HeaderContainer>
  )
}
