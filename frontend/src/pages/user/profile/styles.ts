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
