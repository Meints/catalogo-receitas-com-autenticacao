import { useSearchParams } from 'react-router-dom'
import { Label, LikesFilterContainer, Radio, RadioWrapper } from './styles'
import { OrderBy } from '../../types/models'

export function LikesFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  function onChange(value: OrderBy) {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev)
      if (value) {
        params.set('orderBy', value)
      } else {
        params.delete('orderBy')
      }
      return params
    })
  }
  return (
    <LikesFilterContainer>
      <RadioWrapper>
        <Label>
          <Radio
            type="radio"
            name="likesFilter"
            value={OrderBy.MostRecent}
            checked={searchParams.get('orderBy') === OrderBy.MostRecent}
            onChange={(e) => onChange(e.target.value as OrderBy)}
          />
          Ordenar por recentes
        </Label>
      </RadioWrapper>
      <RadioWrapper>
        <Label>
          <Radio
            type="radio"
            name="likesFilter"
            value={OrderBy.MostPopular}
            checked={searchParams.get('orderBy') === OrderBy.MostPopular}
            onChange={(e) => onChange(e.target.value as OrderBy)}
          />
          Ordenar por curtidas
        </Label>
      </RadioWrapper>
    </LikesFilterContainer>
  )
}
