import { Input, InputContainer } from './styles'

type TitleFilterProps = {
  onChange: (value: string) => void
}

export function TitleFilter({ onChange }: Readonly<TitleFilterProps>) {
  return (
    <InputContainer>
      <Input
        id="title"
        type="text"
        placeholder="Digite o nome da receita"
        onChange={(e) => onChange(e.target.value)}
      />
    </InputContainer>
  )
}
