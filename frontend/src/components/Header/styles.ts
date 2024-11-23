import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  max-width: 80vw;
  background: ${(props) => props.theme['gray-200']};
`

export const Logo = styled.img`
  width: 150px;
`
