import { useSearchParams } from 'react-router-dom'
import { DifficultyRecipe } from '../../types/models'
import { InputContainer, Select, Option } from './styles'

export function DifficultyFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  function onChange(value: DifficultyRecipe) {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev)
      if (value) {
        params.set('difficulty', value)
      } else {
        params.delete('difficulty')
      }
      return params
    })
  }
  return (
    <InputContainer>
      <Select
        value={searchParams.get('difficulty') ?? ''}
        onChange={(e) => onChange(e.target.value as DifficultyRecipe)}
      >
        <Option value="">Selecione a dificuldade</Option>
        <Option value="EASY">Fácil</Option>
        <Option value="MEDIUM">Médio</Option>
        <Option value="HARD">Difícil</Option>
      </Select>
    </InputContainer>
  )
}
