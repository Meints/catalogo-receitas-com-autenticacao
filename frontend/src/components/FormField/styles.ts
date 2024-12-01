import * as Form from '@radix-ui/react-form'
import styled from 'styled-components'

export const Required = styled.span`
  color: ${(props) => props.theme['red-500']};
  font-weight: bold;
`

export const FormField = styled(Form.Field)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 10px;
`

export const FormLabel = styled(Form.Label)`
  font-size: 16px;
  color: ${(props) => props.theme['purple-600']};
  font-weight: 500;

  span {
    color: ${(props) => props.theme['red-500']};
    font-weight: bold;
  }
`

export const FormControl = styled.div`
  position: relative;
  width: 100%;
`

export const FormInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${(props) => props.theme['purple-400']};
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme['purple-200']};
  }

  &:disabled {
    background-color: ${(props) => props.theme['gray-200']};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
  }
`

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.5;
  resize: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${(props) => props.theme['purple-400']};
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme['purple-200']};
  }
`

export const StyledSelect = styled.select`
  width: 100%;
  padding: 12px 20px;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  font-size: 14px;
  background-color: white;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${(props) => props.theme['purple-400']};
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme['purple-200']};
  }

  &:disabled {
    background-color: ${(props) => props.theme['gray-200']};
    cursor: not-allowed;
  }

  option {
    padding: 10px;
  }
`

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: ${(props) => props.theme['gray-500']};
  cursor: pointer;
`
