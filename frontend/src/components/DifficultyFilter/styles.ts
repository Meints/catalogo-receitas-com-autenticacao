import styled from 'styled-components'

export const InputContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`

export const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  background: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-600']};
  cursor: pointer;
  appearance: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${(props) => props.theme['purple-300']};
    outline: none;
    box-shadow: 0 0 4px rgba(157, 129, 214, 0.5);
  }

  & option {
    color: ${(props) => props.theme['gray-600']};
    background-color: ${(props) => props.theme.white};
  }

  & option:checked {
    background: ${(props) => props.theme['purple-400']};
    color: ${(props) => props.theme.white};
  }
`

export const Option = styled.option`
  background: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-600']};
  padding: 8px;
  font-size: 14px;

  &:hover {
    background: ${(props) => props.theme['gray-300']};
  }
`
