import { useSearchParams } from 'react-router-dom'
import { TagsRecipe } from '../../types/models'
import { Checkbox, CheckboxWrapper, Label, TagContainer } from './styles'
import { useState } from 'react'

export function TagFilter() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const tags = Object.entries(TagsRecipe).map(([key, value]) => ({
    key,
    value,
  }))

  function onChange(value: string) {
    const params = new URLSearchParams(searchParams)
    const newSelectedTags = selectedTags.includes(value)
      ? selectedTags.filter((tag) => tag !== value)
      : [...selectedTags, value]

    setSelectedTags(newSelectedTags)

    if (newSelectedTags.length > 0) {
      params.set('tags', newSelectedTags.join(','))
    } else {
      params.delete('tags')
    }

    setSearchParams(params)
    console.log('Filtros aplicados:', params.toString())
    console.log('Tag selecionada:', newSelectedTags)
    console.log('Tags selecionadas:', selectedTags)
  }

  return (
    <TagContainer>
      {tags.map((tag) => (
        <CheckboxWrapper key={tag.key}>
          <Label>
            <Checkbox
              type="checkbox"
              value={tag.key}
              checked={selectedTags.includes(tag.key as TagsRecipe)}
              onChange={(e) => onChange(e.target.value)}
            />
            {tag.value}
          </Label>
        </CheckboxWrapper>
      ))}
    </TagContainer>
  )
}
