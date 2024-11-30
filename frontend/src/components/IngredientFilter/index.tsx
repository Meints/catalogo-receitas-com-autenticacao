import { useSearchParams } from 'react-router-dom'
import { Input, InputContainer } from './styles'

export function IngredientFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  function onChange(value: string) {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev)
      if (value) {
        params.set('ingredients', value)
      } else {
        params.delete('ingredients')
      }
      return params
    })
  }

  return (
    <InputContainer>
      <Input
        value={searchParams.get('ingredients') ?? ''}
        onChange={(e) => onChange(e.target.value)}
        id="ingredients"
        type="text"
        placeholder="Ex.: tomate, queijo, alho"
      />
    </InputContainer>
  )
}
