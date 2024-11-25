import styled from 'styled-components'

export const InputContainer = styled.div`
  display: inline-block;
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 6px;
  background: ${(props) => props.theme['gray-100']};
  color: ${(props) => props.theme['gray-600']};
  transition: border-color 0.3s ease;
  appearance: none;

  &:focus {
    border-color: ${(props) => props.theme['purple-300']};
    outline: none;
    box-shadow: 0 0 4px rgba(157, 129, 214, 0.5);
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }
`
