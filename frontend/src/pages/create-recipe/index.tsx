import { useState } from 'react'
import { DifficultyRecipe, TagsRecipe } from '../../types/models'
import {
  Button,
  Checkbox,
  CheckboxWrapper,
  CreateRecipeContainer,
  FormContainer,
  FormControl,
  FormField,
  FormInput,
  FormLabel,
  FormSubmit,
  IconWrapper,
  LabelTags,
  StyledTextArea,
  TagContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import { CreateRecipeForm, createRecipeSchema } from './validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { RecipeService } from '../../services/recipe'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Clock, NotePencil } from '@phosphor-icons/react'

export function CreateRecipe() {
  const navigate = useNavigate()
  const form = useForm<CreateRecipeForm>({
    resolver: zodResolver(createRecipeSchema),
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (data: CreateRecipeForm) => {
    setIsLoading(true)
    try {
      await RecipeService.create(data)
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
        <FormField name="title">
          <FormLabel>Título</FormLabel>
          <FormControl>
            <FormInput
              {...form.register('title')}
              placeholder="Digite o título da receita"
              required
            />
            <IconWrapper>
              <NotePencil size={20} />
            </IconWrapper>
          </FormControl>
        </FormField>

        <FormField name="preparationTime">
          <FormLabel>Tempo de Preparo (min)</FormLabel>
          <FormControl>
            <FormInput
              type="number"
              {...form.register('preparationTime')}
              placeholder="Ex: 45"
              min={1}
              required
            />
            <IconWrapper>
              <Clock size={20} />
            </IconWrapper>
          </FormControl>
        </FormField>

        <FormField name="difficulty">
          <FormLabel>Dificuldade</FormLabel>
          <FormControl>
            <select {...form.register('difficulty')} required>
              <option value={DifficultyRecipe.EASY}>Fácil</option>
              <option value={DifficultyRecipe.MEDIUM}>Médio</option>
              <option value={DifficultyRecipe.HARD}>Difícil</option>
            </select>
          </FormControl>
        </FormField>

        <FormField name="ingredients">
          <FormLabel>Ingredientes (Separados por vírgula)</FormLabel>
          <FormControl>
            <FormInput
              {...form.register('ingredients')}
              placeholder="Digite os ingredientes"
              required
            />
          </FormControl>
        </FormField>

        <FormField name="instructions">
          <FormLabel>Modo de Preparo</FormLabel>
          <FormControl>
            <StyledTextArea
              {...form.register('instructions')}
              placeholder="Digite as instruções de preparo"
              required
            />
          </FormControl>
        </FormField>

        <FormField name="tags">
          <FormLabel>Tags</FormLabel>
          <TagContainer>
            {Object.entries(TagsRecipe).map(([key, value]) => (
              <CheckboxWrapper key={key}>
                <LabelTags>
                  <Checkbox
                    type="checkbox"
                    value={key}
                    checked={form.watch('tags')?.includes(key) || false}
                    onChange={(e) => {
                      const currentTags = form.getValues('tags') || []
                      const updatedTags = e.target.checked
                        ? [...currentTags, key]
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

        <FormField name="photo">
          <FormLabel>Foto</FormLabel>
          <FormControl>
            <input
              type="file"
              {...form.register('photoKey')}
              accept="image/*"
            />
          </FormControl>
        </FormField>

        <FormSubmit asChild>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Salvando...' : 'Cadastrar Receita'}
          </Button>
        </FormSubmit>
      </FormContainer>
    </CreateRecipeContainer>
  )
}
