import styled from 'styled-components'
import * as Form from '@radix-ui/react-form'

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  width: 100%;
  padding: 20px;
`

export const FormContainer = styled(Form.Root)`
  max-width: 80vw;
  background: ${(props) => props.theme.white};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  width: 40%;
  padding: 40px 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 80%;
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 20px;
  }
`

export const FormField = styled(Form.Field)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`

export const FormLabel = styled(Form.Label)`
  font-size: 16px;
  color: ${(props) => props.theme['gray-700']};
  font-weight: 500;
`

export const FormControl = styled.div`
  position: relative;
  width: 100%;
`

export const FormInput = styled.input`
  width: 100%;
  padding: 12px 40px;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  font-size: 16px;
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

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
  }
`

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: ${(props) => props.theme['gray-500']};
`

export const EyeIconWrapper = styled(IconWrapper)`
  right: 10px;
  left: auto;
`

export const FormSubmit = styled(Form.Submit)`
  width: 100%;
  padding: 12px 16px;
  background-color: ${(props) => props.theme['purple-500']};
  color: ${(props) => props.theme.white};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme['purple-700']};
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: ${(props) => props.theme['gray-400']};
    cursor: not-allowed;
  }
`

export const Button = styled.button`
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
