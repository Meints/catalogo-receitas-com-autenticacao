import { DifficultyFilter } from '../DifficultyFilter'
import { IngredientFilter } from '../IngredientFilter'
import { LikesFilter } from '../LikesFilter'
import { PrepTimeFilter } from '../PrepTimeFilter'
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

export function ModalFilter() {
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
              <LikesFilter />
              <DifficultyFilter />
            </FilterGroup>
            <FilterGroup>
              <IngredientFilter />
              <PrepTimeFilter />
            </FilterGroup>
            <FilterGroup>
              <TagFilter />
            </FilterGroup>
          </FilterContainer>

          <DialogClose>x</DialogClose>
        </DialogContent>
      </DialogPortal>
    </DialogContainer>
  )
}
