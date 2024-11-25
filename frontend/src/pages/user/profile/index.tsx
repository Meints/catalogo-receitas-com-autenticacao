import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import {
  Button,
  FormInput,
  FormContainer,
  FormField,
  FormLabel,
  FormSubmit,
  FormControl,
  IconWrapper,
  ProfileContainer,
} from './styles'
import { UserService } from '../../../services/user'
import { UpdateUserForm, updateUserSchema } from './validation' // Certifique-se de que está importando UpdateUserForm

import { Envelope, Eye, EyeSlash, User } from '@phosphor-icons/react'

export function Profile() {
  const form = useForm<UpdateUserForm>({
    resolver: zodResolver(updateUserSchema), // Use o schema de atualização aqui
  })

  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const getUser = useCallback(async () => {
    try {
      const data = await UserService.getProfile()
      form.setValue('name', data.name)
      form.setValue('email', data.email)
      form.setValue('password', '')
    } catch (error) {
      toast.error('Erro ao carregar dados do perfil.')
    }
  }, [form])

  useEffect(() => {
    getUser()
  }, [getUser])

  const handleSubmit = async (data: UpdateUserForm) => {
    setIsLoading(true)
    try {
      const { password, ...payload } = data
      await UserService.update(payload)
      toast.success('Perfil atualizado com sucesso!')
    } catch (error) {
      toast.error('Erro ao atualizar o perfil.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ProfileContainer>
      <FormContainer onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField name="name">
          <FormLabel>Nome</FormLabel>
          <FormControl>
            <FormInput
              {...form.register('name')}
              placeholder="Digite seu nome"
              required
            />
            <IconWrapper>
              <User size={20} />
            </IconWrapper>
          </FormControl>
        </FormField>

        <FormField name="email">
          <FormLabel>E-mail</FormLabel>
          <FormControl>
            <FormInput
              {...form.register('email')}
              placeholder="E-mail"
              disabled
              readOnly
              required
            />
            <IconWrapper>
              <Envelope size={20} />
            </IconWrapper>
          </FormControl>
        </FormField>

        <FormField name="password">
          <FormLabel>Atualizar Senha</FormLabel>
          <FormControl>
            <FormInput
              {...form.register('password')}
              placeholder="Digite a nova senha"
              type={showPassword ? 'text' : 'password'}
            />
            <IconWrapper onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye size={20} /> : <EyeSlash size={20} />}
            </IconWrapper>
          </FormControl>
        </FormField>

        <FormSubmit asChild>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Salvando...' : 'Salvar Alterações'}
          </Button>
        </FormSubmit>
      </FormContainer>
    </ProfileContainer>
  )
}
