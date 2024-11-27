import { useState } from 'react'
import { TitleFilter } from '../TitleFilter'
import { DifficultyRecipe, TagsRecipe } from '../../types/models'
import {
  SearchContainer,
  TitleFilterContainer,
  FiltersGroup,
  Button,
} from './styles'
import { ModalFilter } from '../ModalFilter'

export type FilterState = {
  title: string
  prepTime: string
  difficulty: DifficultyRecipe | ''
  ingredients: string
  tags: TagsRecipe[] | []
  orderBy: string
}

export function RecipeSearch() {
  const [filters, setFilters] = useState<FilterState>({
    title: '',
    prepTime: '',
    difficulty: '',
    ingredients: '',
    tags: [],
    orderBy: '',
  })

  const handleFilterChange = (
    field: keyof FilterState,
    value: string | number | DifficultyRecipe | TagsRecipe[],
  ) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, [field]: value }
      return updatedFilters
    })
  }

  const applyFilters = () => {
    console.log('Filtros aplicados:', filters)
  }

  return (
    <SearchContainer>
      <TitleFilterContainer>
        <TitleFilter onChange={(value) => handleFilterChange('title', value)} />
      </TitleFilterContainer>
      <FiltersGroup>
        <ModalFilter handleFilterChange={handleFilterChange} />
        <Button onClick={applyFilters}>Buscar Receita</Button>
      </FiltersGroup>
    </SearchContainer>
  )
}
