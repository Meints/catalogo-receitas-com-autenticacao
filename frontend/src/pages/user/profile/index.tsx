import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { Button, FormContainer, FormSubmit, ProfileContainer } from './styles'
import { UserService } from '../../../services/user'
import { UpdateUserForm, updateUserSchema } from './validation'

import { Envelope, User, Camera } from '@phosphor-icons/react'
import { FormFieldComponent } from '../../../components/FormField'

export function Profile() {
  const form = useForm<UpdateUserForm>({
    resolver: zodResolver(updateUserSchema),
  })

  const [isLoading, setIsLoading] = useState(false)
  const [userId, setUserId] = useState<string>('')
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null)

  const getUser = useCallback(async () => {
    try {
      const data = await UserService.getProfile()
      form.setValue('name', data.name)
      form.setValue('email', data.email)
      form.setValue('password', '')
      setUserId(data.id)
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
      setPhotoFile(file)
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

      if (photoFile) {
        await UserService.uploadUserPhoto(userId, photoFile)
      }

      toast.success('Perfil atualizado com sucesso!')
    } catch (error) {
      console.log(error)
      toast.error('Erro ao atualizar o perfil.')
    } finally {
      setIsLoading(false)
      window.location.reload()
    }
  }

  return (
    <ProfileContainer>
      <FormContainer onSubmit={form.handleSubmit(handleSubmit)}>
        <FormFieldComponent
          label="Nome"
          name="name"
          register={form.register('name')}
          icon={<User size={20} />}
        />

        <FormFieldComponent
          label="E-mail"
          name="email"
          register={form.register('email')}
          icon={<Envelope size={20} />}
          disabled
        />

        <FormFieldComponent
          label="Senha"
          name="password"
          type="password"
          placeholder="Digite a nova senha"
          register={form.register('password')}
        />

        <FormFieldComponent
          name="photo"
          label="Foto do Usuário"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          icon={<Camera size={20} />}
        />

        {previewPhoto && <img src={previewPhoto} alt="Preview" width={100} />}

        <FormSubmit asChild>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Salvando...' : 'Salvar Alterações'}
          </Button>
        </FormSubmit>
      </FormContainer>
    </ProfileContainer>
  )
}
