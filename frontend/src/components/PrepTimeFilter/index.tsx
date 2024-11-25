import { Input, InputContainer } from './styles'

type PrepTimeFilterProps = {
  onChange: (value: number) => void
}

export function PrepTimeFilter({ onChange }: Readonly<PrepTimeFilterProps>) {
  return (
    <InputContainer>
      <Input
        id="prep-time"
        type="number"
        placeholder="Preparo em minutos"
        step={5}
        min={5}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </InputContainer>
  )
}
