import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 70vh;
  max-width: 100vw;
`

export const RecipesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  max-width: 80vw;
`

export const PaginationFooter = styled.div`
  text-align: center;
  margin-top: 20px;

  div {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme['gray-500']};
    justify-content: center;
  }
`

export const Button = styled.button`
  border: none;
  background: ${(props) => props.theme['purple-500']};
  color: ${(props) => props.theme.white};
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['purple-600']};
  }
`
