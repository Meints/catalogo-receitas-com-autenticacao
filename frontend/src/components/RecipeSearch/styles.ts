import styled from 'styled-components'

// export const SearchContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
//   padding: 16px;
//   background: ${(props) => props.theme['gray-100']};
//   border-radius: 8px;
// `

// export const MainFilter = styled.div`
//   display: flex;
//   gap: 16px;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   background: ${(props) => props.theme.white};
//   padding: 16px;
//   border: 1px solid ${(props) => props.theme['gray-300']};
//   border-radius: 8px;
// `

// export const SecondaryFilter = styled.div`
//   display: flex;
//   gap: 16px;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   background: ${(props) => props.theme.white};
//   padding: 16px;
//   border: 1px solid ${(props) => props.theme['gray-300']};
//   border-radius: 8px;
// `

// export const TagsSection = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 16px;
//   background: ${(props) => props.theme.white};
//   padding: 16px;
//   border: 1px solid ${(props) => props.theme['gray-300']};
//   border-radius: 8px;
// `

// export const Button = styled.button`
//   border: none;
//   background: ${(props) => props.theme['purple-500']};
//   color: ${(props) => props.theme.white};
//   padding: 12px 20px;
//   border-radius: 8px;
//   font-size: 16px;
//   font-weight: 500;
//   cursor: pointer;
//   transition:
//     background 0.2s,
//     transform 0.2s;

//   &:hover {
//     background: ${(props) => props.theme['purple-600']};
//     transform: translateY(-2px);
//   }

//   &:active {
//     transform: translateY(0);
//   }
// `

// export const FiltersGroup = styled.div`
//   display: flex;
//   gap: 16px;
//   align-items: center;
//   flex-wrap: wrap;
// `

export const SearchContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 16px;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
  align-items: end;
  flex-wrap: wrap;
`

export const TitleFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;
`

export const ModalFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const FiltersGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 16px;
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
