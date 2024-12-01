import { Clock, NotePencil } from '@phosphor-icons/react'
import { FormFieldComponent } from '../../components/FormField'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Checkbox,
  CheckboxWrapper,
  EditRecipeContainer,
  FormContainer,
  FormField,
  FormLabel,
  FormSubmit,
  LabelTags,
  TagContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import { UpdateUserForm } from './validation'
import { updateUserSchema } from '../user/profile/validation'
import { useCallback, useState } from 'react'
import { set } from 'zod'
import { RecipeService } from '../../services/recipe'

export function EditRecipe() {
  const form = useForm<UpdateUserForm>({
    resolver: zodResolver(updateUserSchema),
  })

  const [isLoading, setIsLoading] = useState(false)
  const [recipeId] = useState<number>(0)
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null)

  const getRecipe = useCallback(async () => {
    try {
      setIsLoading(true)
      const data = await RecipeService.getRecipeById(recipeId)

      form.setValue('title', data.title)
      form.setValue('preparationTime', data.preparationTime)
      form.setValue('difficulty', data.difficulty)
      form.setValue('ingredients', data.ingredients.join(', '))
      form.setValue('instructions', data.instructions)
      form.setValue('tags', data.tags)


    }
  })

  return (
    <EditRecipeContainer>
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

        {previewPhoto && <img src={previewPhoto} alt="Preview" width={100} />}


        <FormSubmit asChild>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Salvando...' : 'Cadastrar Receita'}
          </Button>
        </FormSubmit>
      </FormContainer>
    </EditRecipeContainer>
  )
}
