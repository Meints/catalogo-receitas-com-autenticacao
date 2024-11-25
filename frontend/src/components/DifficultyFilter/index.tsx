import { DifficultyRecipe } from '../../types/models'
import { InputContainer, Select, Option } from './styles'

type DifficultyFilterProps = {
  onChange: (value: DifficultyRecipe) => void
}

export function DifficultyFilter({
  onChange,
}: Readonly<DifficultyFilterProps>) {
  return (
    <InputContainer>
      <Select onChange={(e) => onChange(e.target.value as DifficultyRecipe)}>
        <Option value="">Selecione a dificuldade</Option>
        <Option value={DifficultyRecipe.EASY}>Fácil</Option>
        <Option value={DifficultyRecipe.MEDIUM}>Médio</Option>
        <Option value={DifficultyRecipe.HARD}>Difícil</Option>
      </Select>
    </InputContainer>
  )
}
