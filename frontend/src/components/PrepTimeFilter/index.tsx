import { useSearchParams } from 'react-router-dom'
import { Input, InputContainer } from './styles'

export function PrepTimeFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  function onChange(value: number) {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev)
      if (value) {
        params.set('prepTime', value.toString())
      } else {
        params.delete('prepTime')
      }
      return params
    })
  }
  return (
    <InputContainer>
      <Input
        value={searchParams.get('prepTime') ?? ''}
        id="prep-time"
        type="number"
        placeholder="Preparo em minutos"
        min={1}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </InputContainer>
  )
}
