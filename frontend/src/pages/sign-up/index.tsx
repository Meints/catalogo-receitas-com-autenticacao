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

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('As senhas não coincidem!')
      return
    }

    try {
      const response = await axios.post('http://localhost:3333/users', {
        name,
        email,
        password,
      })
      console.log('Cadastro realizado com sucesso:', response.data)
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error)
    }
  }

  return (
    <LoginContainer>
      <FormContainer onSubmit={handleSubmit}>
        <FormHeader>
          <FormImageHeader src={Logo} alt="logo ChefNet receitas" />
          <FormTitleHeader>Criar Conta</FormTitleHeader>
        </FormHeader>

        <FormField name="name">
          <FormLabel>
            Nome<Required>*</Required>
          </FormLabel>
          <FormControl>
            <FormInput
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormControl>
        </FormField>

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
        </FormField>

        <FormField name="confirmPassword">
          <FormLabel>
            Confirmar Senha<Required>*</Required>
          </FormLabel>
          <FormControl>
            <FormInput
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <IconWrapper onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye size={20} /> : <EyeSlash size={20} />}
            </IconWrapper>
          </FormControl>
        </FormField>

        <FormSubmit asChild>
          <Button>Cadastrar</Button>
        </FormSubmit>

        <LinkSection>
          <StyledLink href="/login">Já tem uma conta? Faça login</StyledLink>
        </LinkSection>
      </FormContainer>
    </LoginContainer>
  )
}
