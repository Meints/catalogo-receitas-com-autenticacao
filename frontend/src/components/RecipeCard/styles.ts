import styled from 'styled-components'
import { DifficultyRecipe } from '../../types/models'
import * as Dialog from '@radix-ui/react-dialog'

export const DialogContainer = styled(Dialog.Root)`
  padding: 0;
  margin: 0;
`

export const DialogTrigger = styled(Dialog.Trigger)`
  border: 0;
`

export const DialogPortal = styled(Dialog.Portal)`
  padding: 0;
  margin: 0;
`

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`

export const DialogContent = styled(Dialog.Content)`
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  padding: 20px;
  width: 600px;
  max-width: 90%;
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
`

export const Card = styled.div`
  width: calc(80vw / 4 - 30px);
  height: 100%;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    width: calc(80vw / 3 - 27px);
  }

  @media (max-width: 768px) {
    width: calc(80vw / 2 - 20px);
  }

  @media (max-width: 600px) {
    width: 80vw;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`

export const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  gap: 10px;
  z-index: 10;

  button {
    background: none;
    border: none;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme['purple-500']};
      transition: all 0.3s ease;
      height: 20px;
    }

    &:hover svg {
      color: ${(props) => props.theme['purple-600']};
      transform: scale(1.1);
    }
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const OverlayContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

interface OverlayTextProps {
  variant: DifficultyRecipe
}

export const OverlayText = styled.div<OverlayTextProps>`
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${({ variant }) =>
    variant === DifficultyRecipe.EASY
      ? '#155724'
      : variant === DifficultyRecipe.MEDIUM
        ? '#856404'
        : '#721c24'};
  background: ${({ variant }) =>
    variant === DifficultyRecipe.EASY
      ? '#d4edda'
      : variant === DifficultyRecipe.MEDIUM
        ? '#fff3cd'
        : '#f8d7da'};
`

export const PrepTime = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.white};
  border-radius: 8px;
  font-size: 14px;
  padding: 4px 8px;
`

export const Content = styled.div`
  padding: 16px;
`

export const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 22px;
  color: ${(props) => props.theme['gray-700']};
`
export const ListTags = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

export const Tag = styled.li`
  display: flex;
  text-align: center;
  align-items: center;
  text-transform: uppercase;
  background: ${(props) => props.theme['purple-200']};
  padding: 10px;
  height: 24px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: bold;
`
