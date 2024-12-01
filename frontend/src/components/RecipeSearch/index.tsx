import { TitleFilter } from '../TitleFilter'
import { DifficultyRecipe, TagsRecipe } from '../../types/models'
import { SearchContainer, TitleFilterContainer, FiltersGroup } from './styles'
import { ModalFilter } from '../ModalFilter'

export type FilterState = {
  title: string
  prepTime: number | ''
  difficulty: DifficultyRecipe | ''
  ingredients: string
  tags: TagsRecipe[] | []
  orderBy: string
}

export function RecipeSearch() {
  return (
    <SearchContainer>
      <TitleFilterContainer>
        <TitleFilter />
      </TitleFilterContainer>
      <FiltersGroup>
        <ModalFilter />
      </FiltersGroup>
    </SearchContainer>
  )
}
