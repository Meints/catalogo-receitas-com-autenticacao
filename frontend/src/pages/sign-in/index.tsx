import { Envelope, Eye, EyeSlash } from '@phosphor-icons/react'
import { useState } from 'react'
import {
  FormContainer,
  LoginContainer,
  FormHeader,
  FormImageHeader,
  FormTitleHeader,
  FormLabel,
  FormControl,
  FormInput,
  FormField,
  IconWrapper,
  FormSubmit,
  Button,
  Required,
  LinkSection,
  StyledLink,
} from './styles'
import Logo from '../../assets/logo.png'
import axios from 'axios'

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const response = await axios.post('http://localhost:3333/auth', {
        email,
        password,
      })
      console.log('sucesso: ', response.data)
    } catch (error) {
      console.log('erro: ', error)
    }
  }

  return (
    <LoginContainer>
      <FormContainer onSubmit={handleSubmit}>
        <FormHeader>
          <FormImageHeader src={Logo} alt="logo ChefNet receitas" />
          <FormTitleHeader>Login</FormTitleHeader>
        </FormHeader>

        <FormField name="email">
          <FormLabel>
            E-mail<Required>*</Required>
          </FormLabel>
          <FormControl>
            <FormInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <IconWrapper>
              <Envelope size={20} />
            </IconWrapper>
          </FormControl>
        </FormField>

        <FormField name="password">
          <FormLabel>
            Senha<Required>*</Required>
          </FormLabel>
          <FormControl>
            <FormInput
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <IconWrapper onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye size={20} /> : <EyeSlash size={20} />}
            </IconWrapper>
          </FormControl>
          <StyledLink href="/forgot-password">Esqueceu sua senha?</StyledLink>
        </FormField>

        <FormSubmit asChild>
          <Button>Entrar</Button>
        </FormSubmit>

        <LinkSection>
          <StyledLink href="/signup">
            Ainda não tem cadastro? Clique aqui
          </StyledLink>
        </LinkSection>
      </FormContainer>
    </LoginContainer>
  )
}
