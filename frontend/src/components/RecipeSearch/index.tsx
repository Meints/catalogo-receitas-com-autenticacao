import { TitleFilter } from '../TitleFilter'
import { DifficultyRecipe, TagsRecipe } from '../../types/models'
import {
  SearchContainer,
  TitleFilterContainer,
  FiltersGroup,
  Button,
} from './styles'
import { ModalFilter } from '../ModalFilter'
import { useSearchParams } from 'react-router-dom'

export type FilterState = {
  title: string
  prepTime: number | ''
  difficulty: DifficultyRecipe | ''
  ingredients: string
  tags: TagsRecipe[] | []
  orderBy: string
}

export function RecipeSearch() {
  const [searchParams, setSearchParams] = useSearchParams()

  // const handleFilterChange = (
  //   field: keyof FilterState,
  //   value: string | number | DifficultyRecipe | TagsRecipe[],
  // ) => {
  //   setFilters((prevFilters) => {
  //     const updatedFilters = { ...prevFilters, [field]: value }
  //     return updatedFilters
  //   })
  // }

  const applyFilters = () => {
    console.log('Filtros aplicados:', searchParams)
  }

  return (
    <SearchContainer>
      <TitleFilterContainer>
        <TitleFilter />
      </TitleFilterContainer>
      <FiltersGroup>
        <ModalFilter />
        <Button onClick={applyFilters}>Buscar Receita</Button>
      </FiltersGroup>
    </SearchContainer>
  )
}
