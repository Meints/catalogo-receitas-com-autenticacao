import styled from 'styled-components'
import * as Form from '@radix-ui/react-form'

export const Required = styled.span`
  color: ${(props) => props.theme['red-500']};
  font-weight: bold;
`

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${(props) => props.theme['gray-100']};
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

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
`

export const FormImageHeader = styled.img`
  width: 100px;
  border-right: 2px solid ${(props) => props.theme['gray-300']};
  padding-right: 15px;

  @media (max-width: 480px) {
    width: 80px;
  }
`

export const FormTitleHeader = styled.h2`
  font-size: 26px;
  font-weight: bold;
  color: ${(props) => props.theme['purple-500']};

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
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

export const LinkSection = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const StyledLink = styled.a`
  font-size: 14px;
  color: ${(props) => props.theme['purple-500']};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme['purple-700']};
    text-decoration: underline;
  }
`
