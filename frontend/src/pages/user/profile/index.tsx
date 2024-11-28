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
import { UpdateUserForm, updateUserSchema } from './validation'

import { Envelope, Eye, EyeSlash, User } from '@phosphor-icons/react'

export function Profile() {
  const form = useForm<UpdateUserForm>({
    resolver: zodResolver(updateUserSchema),
  })

  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null)

  const getUser = useCallback(async () => {
    try {
      const data = await UserService.getProfile()
      form.setValue('name', data.name)
      form.setValue('email', data.email)
      form.setValue('password', '')
    } catch (error) {
      console.log(error)
      toast.error('Erro ao carregar dados do perfil.')
    }
  }, [form])

  useEffect(() => {
    getUser()
  }, [getUser])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      form.setValue('photoKey', file)
      setPreviewPhoto(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (data: UpdateUserForm) => {
    setIsLoading(true)
    try {
      const payload = { ...data }
      if (!data.password) {
        delete payload.password
      }

      await UserService.update(payload)
      toast.success('Perfil atualizado com sucesso!')
    } catch (error) {
      console.log(error)
      toast.error('Erro ao atualizar o perfil.')
    } finally {
      setIsLoading(false)
    }
  }

  console.log(getUser())

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

        <FormField name="photo">
          <FormLabel>Foto do Usuário</FormLabel>
          <FormControl>
            <FormInput
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </FormControl>
          {previewPhoto && <img src={previewPhoto} alt="Preview" width={200} />}
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
