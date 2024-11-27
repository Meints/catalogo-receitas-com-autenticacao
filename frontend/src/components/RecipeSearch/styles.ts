import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }

  @media (max-width: 375px) {
    gap: 8px;
    padding: 12px;
  }
`

export const TitleFilterContainer = styled.div`
  flex: 3;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    min-width: auto;
    gap: 4px;
  }
`

export const FiltersGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: 375px) {
    gap: 8px;
    justify-content: center;
  }
`

export const Button = styled.button`
  flex: 1;
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

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`
