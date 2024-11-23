import { useState } from 'react'
import {
  FormContainer,
  FormField,
  FormLabel,
  FormRoot,
  Input,
  Required,
} from './styles'
import { DifficultyRecipe, TagsRecipe } from '../../types/models'

import * as RadioGroup from '@radix-ui/react-radio-group'

export function CreateRecipe() {
  const [name, setName] = useState('')
  const [prepTime, setPrepTime] = useState(0)
  const [difficulty, setDifficulty] = useState(DifficultyRecipe.EASY)
  const [instructions, setInstructions] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [tags, setTags] = useState<TagsRecipe[]>([])
  const [image, setImage] = useState<File | null>(null)

  const handleTagChange = (tag: TagsRecipe) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    )
  }

  return (
    <form>
      <fieldset>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="prepTime">Tempo de preparo</label>
          <input type="number" id="prepTime" name="prepTime" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="difficulty">Dificuldade</label>
          <select id="difficulty" name="difficulty">
            <option value="easy">Fácil</option>
            <option value="medium">Médio</option>
            <option value="hard">Difícil</option>
          </select>
        </div>
        <div>
          <label htmlFor="name">Tempo de preparo</label>
          <input type="text" id="name" name="name" />
        </div>
      </fieldset>
    </form>
  )
}
