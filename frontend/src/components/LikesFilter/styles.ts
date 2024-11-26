import styled from 'styled-components'

export const LikesFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${(props) => props.theme['gray-600']};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme['purple-300']};
  }
`

export const Radio = styled.input.attrs({ type: 'radio' })`
  margin-right: 8px;
  width: 16px;
  height: 16px;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 50%; /* Formato circular para rádio */
  appearance: none;
  cursor: pointer;
  transition:
    background-color 0.2s,
    border-color 0.2s;

  &:checked {
    background-color: ${(props) => props.theme['purple-300']};
    border-color: ${(props) => props.theme['purple-300']};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(157, 129, 214, 0.5);
  }

  &:hover {
    border-color: ${(props) => props.theme['purple-200']};
  }
`
