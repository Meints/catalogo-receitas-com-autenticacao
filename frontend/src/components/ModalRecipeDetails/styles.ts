import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 900px;
  background-color: white;
  border-radius: 8px;
  position: relative;
  margin: 0 auto;
  z-index: 100;
`

export const ModalContent = styled.div`
  display: flex;
  height: 100%;
  gap: 20px;
  align-items: stretch;
  margin-left: 200px;
`

export const ModalInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin: 8px 0;
  }

  strong {
    font-weight: bold;
  }
`
export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow: hidden;
`

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`

export const Span = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme['purple-600']};
  margin-right: 5px;
`

export const Box = styled.div`
  margin-top: 5px;
  font-size: 16px;
  padding: 6px 12px;
  background: ${(props) => props.theme['gray-100']};
  border: 1px solid ${(props) => props.theme['purple-200']};
`

export const TitleRecipe = styled.h2`
  font-size: 24px;
  color: ${(props) => props.theme['gray-600']};
  margin-top: -20px;
  font-weight: 900;
`

export const LikesQtd = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme['gray-500']};
`

export const BasicInformation = styled.div`
  display: flex;
  gap: 20px;
`

export const EssentialInformation = styled.div`
  margin-top: 10px;
`
export const GroupTags = styled.ul`
  margin-top: 10px;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

export const Tag = styled.li`
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  background: ${(props) => props.theme['purple-200']};
  padding: 5px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: bold;
`

export const DialogClose = styled(Dialog.Close)`
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};
  font-size: 24px;

  &:hover {
    color: ${(props) => props.theme['gray-700']};
  }
`
