import { DifficultyRecipe, TagsRecipe } from '../../types/models'
import { DifficultyFilter } from '../DifficultyFilter'
import { IngredientFilter } from '../IngredientFilter'
import { LikesFilter } from '../LikesFilter'
import { PrepTimeFilter } from '../PrepTimeFilter'
import { FilterState } from '../RecipeSearch'
import { TagFilter } from '../TagFilter'
import {
  DialogContainer,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  FilterContainer,
  FilterGroup,
} from './styles'

type ModalFilterProps = {
  handleFilterChange: (
    field: keyof FilterState,
    value: string | number | DifficultyRecipe | TagsRecipe[],
  ) => void
}

export function ModalFilter({
  handleFilterChange,
}: Readonly<ModalFilterProps>) {
  return (
    <DialogContainer>
      <DialogTrigger>+ Filtros</DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Mais opções de filtro</DialogTitle>
          <DialogDescription>
            Escolha os filtros desejados para buscar a receita 🍕
          </DialogDescription>
          <FilterContainer>
            <FilterGroup>
              <LikesFilter
                onChange={(value) => handleFilterChange('orderBy', value)}
              />
              <DifficultyFilter
                onChange={(value) => handleFilterChange('difficulty', value)}
              />
            </FilterGroup>
            <FilterGroup>
              <IngredientFilter
                onChange={(value) => handleFilterChange('ingredients', value)}
              />
              <PrepTimeFilter
                onChange={(value) => handleFilterChange('prepTime', value)}
              />
            </FilterGroup>
            <FilterGroup>
              <TagFilter
                onChange={(value) => handleFilterChange('tags', value)}
              />
            </FilterGroup>
          </FilterContainer>

          <DialogClose>x</DialogClose>
        </DialogContent>
      </DialogPortal>
    </DialogContainer>
  )
}
