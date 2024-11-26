import { Label, LikesFilterContainer, Radio, RadioWrapper } from './styles'

type LikesFilterProps = {
  onChange: (value: string) => void
}

export function LikesFilter({ onChange }: Readonly<LikesFilterProps>) {
  return (
    <LikesFilterContainer>
      <RadioWrapper>
        <Label>
          <Radio
            type="radio"
            name="likesFilter"
            value="recent"
            onChange={(e) => onChange(e.target.value)}
          />
          Ordenar por recentes
        </Label>
      </RadioWrapper>
      <RadioWrapper>
        <Label>
          <Radio
            type="radio"
            name="likesFilter"
            value="like"
            onChange={(e) => onChange(e.target.value)}
          />
          Ordenar por curtidas
        </Label>
      </RadioWrapper>
    </LikesFilterContainer>
  )
}
