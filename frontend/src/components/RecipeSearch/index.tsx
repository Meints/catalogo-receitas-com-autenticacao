import { useState } from 'react'
import { TitleFilter } from '../TitleFilter'
import { DifficultyRecipe, TagsRecipe } from '../../types/models'
import { PrepTimeFilter } from '../PrepTimeFilter'
import { DifficultyFilter } from '../DifficultyFilter'
import { IngredientFilter } from '../IngredientFilter'
import { TagFilter } from '../TagFilter'
import {
  MainFilter,
  SearchContainer,
  SecondaryFilter,
  TagsSection,
  Button,
} from './styles'
import { LikesFilter } from '../LikesFilter'

type FilterState = {
  title: string
  prepTime: string
  difficulty: DifficultyRecipe | ''
  ingredients: string
  tags: TagsRecipe[] | []
}

export function RecipeSearch() {
  const [filters, setFilters] = useState<FilterState>({
    title: '',
    prepTime: '',
    difficulty: '',
    ingredients: '',
    tags: [],
  })

  const handleFilterChange = (
    field: keyof FilterState,
    value: string | number | DifficultyRecipe | TagsRecipe[],
  ) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, [field]: value }
      console.log(updatedFilters)
      return updatedFilters
    })
  }

  const applyFilters = () => {
    console.log('Filtros aplicados:', filters)
  }

  return (
    <SearchContainer>
      <MainFilter>
        <TitleFilter onChange={(value) => handleFilterChange('title', value)} />
        <DifficultyFilter
          onChange={(value) => handleFilterChange('difficulty', value)}
        />
      </MainFilter>
      <SecondaryFilter>
        <PrepTimeFilter
          onChange={(value) => handleFilterChange('prepTime', value)}
        />
        <IngredientFilter
          onChange={(value) => handleFilterChange('ingredients', value)}
        />
      </SecondaryFilter>
      <TagsSection>
        <TagFilter onChange={(value) => handleFilterChange('tags', value)} />
      </TagsSection>
      <div>
        <LikesFilter />
        <Button onClick={applyFilters}>Aplicar filtros</Button>
      </div>
    </SearchContainer>
  )
}
