import { Envelope, User } from '@phosphor-icons/react'
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
import { useNavigate } from 'react-router-dom'
import { FormFieldComponent } from '../../components/FormField'
import { useForm } from 'react-hook-form'
import { createUserSchema, ISignUpFields } from './validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserService } from '../../services/user'

export function SignUp() {
  const form = useForm<ISignUpFields>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  const navigate = useNavigate()

  const handleSubmit = async (data: ISignUpFields) => {
    if (data.password !== data.confirmPassword) {
      toast.error('As senhas não coincidem!')
      return
    }

    try {
      const { confirmPassword, ...userData } = data
      const response = await UserService.signUp(userData)

      if (response) {
        toast.success('Cadastro realizado com sucesso!')
        navigate('/login')
      }
    } catch (error) {
      toast.error('Erro ao cadastrar usuário.')
      console.error(error)
    }
  }

  return (
    <LoginContainer>
      <FormContainer onSubmit={form.handleSubmit(handleSubmit)}>
        <FormHeader>
          <FormImageHeader src={Logo} alt="logo ChefNet receitas" />
          <FormTitleHeader>Criar Conta</FormTitleHeader>
        </FormHeader>

        <FormFieldComponent
          label="Nome"
          name="name"
          placeholder="Digite seu nome"
          register={form.register('name')}
          icon={<User size={20} />}
          required
        />

        <FormFieldComponent
          label="E-mail"
          name="email"
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

        <FormFieldComponent
          label="Confirmar Senha"
          name="confirmPassword"
          type="password"
          placeholder="Digite novamente sua senha"
          register={form.register('confirmPassword')}
          required
        />

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
