import { Envelope } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FormContainer,
  LoginContainer,
  FormHeader,
  FormImageHeader,
  FormTitleHeader,
  FormSubmit,
  Button,
  LinkSection,
  StyledLink,
} from './styles'
import Logo from '../../assets/logo.png'
import { toast } from 'react-toastify'
import { ILoginFields, loginSchema } from './validation'
import { useAuth } from '../../hooks/useAuth'
import { isAxiosError } from 'axios'
import { FormFieldComponent } from '../../components/FormField'

export function SignIn() {
  const form = useForm<ILoginFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

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

        <FormFieldComponent
          label="E-mail"
          name="email"
          type="email"
          placeholder="Digite seu e-mail"
          register={form.register('email')}
          icon={<Envelope size={20} />}
          required
        />

        <FormFieldComponent
          label="Senha"
          name="password"
          type="password"
          placeholder="Digite sua senha"
          register={form.register('password')}
          required
        />

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
