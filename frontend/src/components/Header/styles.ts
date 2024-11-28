import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  padding: 10px 20px;
  background: ${(props) => props.theme['purple-300']};
  z-index: 1;
`

export const Logo = styled.img`
  width: 150px;
`
