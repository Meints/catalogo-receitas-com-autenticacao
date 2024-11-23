import styled from 'styled-components'

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 26px;
    margin-bottom: 8px;
    color: ${(props) => props.theme['gray-600']};
  }

  p {
    font-size: 18px;
    color: ${(props) => props.theme['gray-400']};
  }
`
