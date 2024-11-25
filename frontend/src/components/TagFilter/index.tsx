import { useState } from 'react'
import { TagsRecipe } from '../../types/models'
import { Checkbox, CheckboxWrapper, Label, TagContainer } from './styles'

type TagFilterProps = {
  onChange: (value: TagsRecipe[]) => void
}

export function TagFilter({ onChange }: Readonly<TagFilterProps>) {
  const [selectedTags, setSelectedTags] = useState<TagsRecipe[]>([])

  const tags = Object.entries(TagsRecipe).map(([key, value]) => ({
    key,
    value,
  }))

  const handleCheckboxChange = (tag: TagsRecipe, isChecked: boolean) => {
    const updatedTags = isChecked
      ? [...selectedTags, tag]
      : selectedTags.filter((selectedTag) => selectedTag !== tag)

    setSelectedTags(updatedTags)
    onChange(updatedTags)
  }

  return (
    <TagContainer>
      {tags.map((tag) => (
        <CheckboxWrapper key={tag.key}>
          <Label>
            <Checkbox
              type="checkbox"
              value={tag.value}
              checked={selectedTags.includes(tag.value)}
              onChange={(e) =>
                handleCheckboxChange(tag.value, e.target.checked)
              }
            />
            {tag.value}
          </Label>
        </CheckboxWrapper>
      ))}
    </TagContainer>
  )
}
