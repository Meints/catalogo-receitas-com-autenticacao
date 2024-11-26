import { useState } from 'react'
import { TitleFilter } from '../TitleFilter'
import { DifficultyRecipe, TagsRecipe } from '../../types/models'
// import { PrepTimeFilter } from '../PrepTimeFilter'
// import { DifficultyFilter } from '../DifficultyFilter'
// import { IngredientFilter } from '../IngredientFilter'
// import { TagFilter } from '../TagFilter'
import {
  // MainFilter,
  SearchContainer,
  // SecondaryFilter,
  // TagsSection,
  Button,
  FiltersGroup,
  TitleFilterContainer,
  ModalFilterContainer,
} from './styles'
// import { LikesFilter } from '../LikesFilter'
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

      <ModalFilterContainer>
        <ModalFilter handleFilterChange={handleFilterChange} />
      </ModalFilterContainer>

      <FiltersGroup>
        <Button onClick={applyFilters}>Aplicar filtros</Button>
      </FiltersGroup>
    </SearchContainer>
  )
  // return (
  //   <SearchContainer>
  //     <TitleFilter onChange={(value) => handleFilterChange('title', value)} />
  //     <DifficultyFilter
  //         onChange={(value) => handleFilterChange('difficulty', value)}
  //       />
  //       <LikesFilter
  //         onChange={(value) => handleFilterChange('orderBy', value)}
  //       />
  //     <ModalFilter handleFilterChange={handleFilterChange} />
  //     <SecondaryFilter>
  //       <PrepTimeFilter
  //         onChange={(value) => handleFilterChange('prepTime', value)}
  //       />
  //       <IngredientFilter
  //         onChange={(value) => handleFilterChange('ingredients', value)}
  //       />
  //     </SecondaryFilter>
  //     <TagsSection>
  //       <TagFilter onChange={(value) => handleFilterChange('tags', value)} />
  //     </TagsSection>
  //     <FiltersGroup>
  //       <Button onClick={applyFilters}>Aplicar filtros</Button>
  //     </FiltersGroup>
  //   </SearchContainer>
  // )
}
