import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const MainFilter = styled.div`
  display: flex;
`

export const SecondaryFilter = styled.div`
  display: flex;
`

export const TagsSection = styled.div`
  display: flex;
`

export const Button = styled.button`
  border: none;
  background: ${(props) => props.theme['purple-500']};
  color: ${(props) => props.theme.white};
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['purple-600']};
  }
`
