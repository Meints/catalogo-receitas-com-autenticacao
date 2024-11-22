import styled from 'styled-components'
import { DifficultyRecipe } from '../../types/models'

export const Card = styled.div`
  width: 300px;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`

export const ImageConatiner = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
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
  background: ${(props) => props.theme['purple-300']};
  padding: 10px;
  height: 24px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: bold;
`
