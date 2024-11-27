import { Input, InputContainer, IconContainer } from './styles'
import { MagnifyingGlass } from '@phosphor-icons/react'

type TitleFilterProps = {
  onChange: (value: string) => void
}

export function TitleFilter({ onChange }: Readonly<TitleFilterProps>) {
  return (
    <InputContainer>
      <IconContainer>
        <MagnifyingGlass size={20} />
      </IconContainer>
      <Input
        id="title"
        type="text"
        placeholder="Digite o nome da receita"
        onChange={(e) => onChange(e.target.value)}
      />
    </InputContainer>
  )
}
