import { Input, InputContainer } from './styles'

type IngredientFilterProps = {
  onChange: (value: string) => void
}

export function IngredientFilter({
  onChange,
}: Readonly<IngredientFilterProps>) {
  return (
    <InputContainer>
      <Input
        id="ingredients"
        type="text"
        placeholder="Ex.: tomate, queijo, alho"
        onChange={(e) => onChange(e.target.value)}
      />
    </InputContainer>
  )
}
