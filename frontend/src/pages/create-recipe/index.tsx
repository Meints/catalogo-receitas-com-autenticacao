import { useState } from 'react'
import { TagsRecipe } from '../../types/models'
import {
  Button,
  Checkbox,
  CheckboxWrapper,
  CreateRecipeContainer,
  FormContainer,
  FormField,
  FormLabel,
  FormSubmit,
  LabelTags,
  TagContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import { CreateRecipeForm, createRecipeSchema } from './validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { RecipeService } from '../../services/recipe'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Camera, Clock, NotePencil } from '@phosphor-icons/react'
import { FormFieldComponent } from '../../components/FormField'

export function CreateRecipe() {
  const navigate = useNavigate()
  const form = useForm<CreateRecipeForm>({
    resolver: zodResolver(createRecipeSchema),
  })

  const [isLoading, setIsLoading] = useState(false)
  const [photoFile, setPhotoFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPhotoFile(file)
    }
  }

  const handleSubmit = async (data: CreateRecipeForm) => {
    setIsLoading(true)
    try {
      const createdRecipe = await RecipeService.create(data)

      if (createdRecipe) {
        if (photoFile) {
          await RecipeService.uploadRecipePhoto(createdRecipe.id, photoFile)
        }
      }

      toast.success('Receita criada com sucesso!')
      form.reset()
      navigate('/user/my-recipes')
    } catch (error) {
      console.error(error)
      toast.error('Erro ao cadastrar receita.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CreateRecipeContainer>
      <FormContainer onSubmit={form.handleSubmit(handleSubmit)}>
        <FormFieldComponent
          name="title"
          label="Título"
          placeholder="Digite o título da receita"
          register={form.register('title')}
          icon={<NotePencil size={20} />}
          required
        />

        <FormFieldComponent
          name="prepTime"
          label="Tempo de Preparo (min)"
          type="number"
          placeholder="Ex: 45"
          min={1}
          register={form.register('preparationTime', { valueAsNumber: true })}
          icon={<Clock size={20} />}
          required
        />

        <FormFieldComponent
          label="Dificuldade"
          name="difficulty"
          type="select"
          register={form.register('difficulty')}
          options={[
            { value: 'EASY', label: 'Fácil' },
            { value: 'MEDIUM', label: 'Médio' },
            { value: 'HARD', label: 'Difícil' },
          ]}
          required
        />

        <FormFieldComponent
          name="ingredients"
          label="Ingredientes (Separados por vírgula)"
          placeholder="Digite os ingredientes"
          register={form.register('ingredients')}
          icon={<NotePencil size={20} />}
          required
        />

        <FormFieldComponent
          name="instructions"
          label="Modo de Preparo"
          placeholder="Digite as instruções de preparo"
          register={form.register('instructions')}
          required
          isTextArea
        />

        <FormField name="tags">
          <FormLabel>Tags</FormLabel>
          <TagContainer>
            {Object.entries(TagsRecipe).map(([key, value]) => (
              <CheckboxWrapper key={key}>
                <LabelTags>
                  <Checkbox
                    type="checkbox"
                    value={key}
                    checked={
                      form
                        .watch('tags')
                        ?.includes(key as keyof typeof TagsRecipe) || false
                    }
                    onChange={(e) => {
                      const currentTags =
                        (form.getValues(
                          'tags',
                        ) as (keyof typeof TagsRecipe)[]) || []
                      const updatedTags = e.target.checked
                        ? [...currentTags, key as keyof typeof TagsRecipe]
                        : currentTags.filter((tag) => tag !== key)

                      form.setValue('tags', updatedTags)
                    }}
                  />
                  {value}
                </LabelTags>
              </CheckboxWrapper>
            ))}
          </TagContainer>
        </FormField>

        <FormFieldComponent
          name="photo"
          label="Foto da Receita"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          icon={<Camera size={20} />}
        />

        <FormSubmit asChild>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Salvando...' : 'Cadastrar Receita'}
          </Button>
        </FormSubmit>
      </FormContainer>
    </CreateRecipeContainer>
  )
}
