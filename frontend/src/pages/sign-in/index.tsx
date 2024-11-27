import { Envelope, Eye, EyeSlash } from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { toast } from 'react-toastify'
import { ILoginFields, loginSchema } from './validation'
import { useAuth } from '../../hooks/useAuth'
import { isAxiosError } from 'axios'

export function SignIn() {
  const form = useForm<ILoginFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (data: ILoginFields) => {
    try {
      await login(data.email, data.password)
      navigate('/')
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message)
      } else {
        toast.error('Erro ao realizar login')
      }
    }
  }

  return (
    <LoginContainer>
      <FormContainer onSubmit={form.handleSubmit(handleSubmit)}>
        <FormHeader>
          <FormImageHeader src={Logo} alt="logo ChefNet receitas" />
          <FormTitleHeader>Login</FormTitleHeader>
        </FormHeader>

        <FormField name="email">
          <FormLabel>
            E-mail<Required>*</Required>
          </FormLabel>
          <FormControl>
            <FormInput type="email" {...form.register('email')} required />
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
              {...form.register('password')}
              required
            />
            <IconWrapper onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye size={20} /> : <EyeSlash size={20} />}
            </IconWrapper>
          </FormControl>
          <StyledLink href="/forgot-password">Esqueceu sua senha?</StyledLink>
        </FormField>

        <FormSubmit asChild>
          <Button type="submit">Entrar</Button>
        </FormSubmit>

        <LinkSection>
          <StyledLink href="/sign-up">
            Ainda não tem cadastro? Clique aqui
          </StyledLink>
        </LinkSection>
      </FormContainer>
    </LoginContainer>
  )
}
