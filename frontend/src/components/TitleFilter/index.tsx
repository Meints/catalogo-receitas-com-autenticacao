import { useSearchParams } from 'react-router-dom'
import { Input, InputContainer, IconContainer } from './styles'
import { MagnifyingGlass } from '@phosphor-icons/react'

export function TitleFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  function onChange(value: string) {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev)
      if (value) {
        params.set('title', value)
      } else {
        params.delete('title')
      }
      console.log('Filtros aplicados:', params)
      return params
    })
  }
  return (
    <InputContainer>
      <IconContainer>
        <MagnifyingGlass size={20} />
      </IconContainer>
      <Input
        value={searchParams.get('title') ?? ''}
        id="title"
        type="text"
        placeholder="Digite o nome da receita"
        onChange={(e) => onChange(e.target.value)}
      />
    </InputContainer>
  )
}
