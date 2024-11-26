import styled from 'styled-components'

export const TagContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(6, auto);
  grid-auto-flow: column;
  gap: 16px;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-rows: repeat(10, auto);
  }

  @media (max-width: 400px) {
    grid-template-rows: repeat(13, auto);
  }
`

export const CheckboxWrapper = styled.div`
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

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 8px;
  width: 16px;
  height: 16px;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 4px;
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
