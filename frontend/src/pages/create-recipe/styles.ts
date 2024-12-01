import styled from 'styled-components'
import * as Form from '@radix-ui/react-form'

export const CreateRecipeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`

export const FormContainer = styled(Form.Root)`
  max-width: 80vw;
  background: ${(props) => props.theme.white};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  width: 50%;
  padding: 40px 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 20px 10px;
  }
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
`

export const FormControl = styled.div`
  position: relative;
  width: 100%;
`

// export const FormInput = styled.input`
//   width: 100%;
//   padding: 12px 20px;
//   border: 1px solid ${(props) => props.theme['gray-300']};
//   border-radius: 8px;
//   font-size: 14px;
//   transition: border-color 0.2s;

//   &:focus {
//     border-color: ${(props) => props.theme['purple-400']};
//     outline: none;
//     box-shadow: 0 0 0 3px ${(props) => props.theme['purple-200']};
//   }

//   &:disabled {
//     background-color: ${(props) => props.theme['gray-200']};
//     cursor: not-allowed;
//   }

//   &::placeholder {
//     color: ${(props) => props.theme['gray-500']};
//   }
// `

// export const StyledTextArea = styled.textarea`
//   width: 100%;
//   padding: 12px;
//   border: 1px solid ${(props) => props.theme['gray-300']};
//   border-radius: 8px;
//   font-size: 16px;
//   line-height: 1.5;
//   resize: none;
//   transition: border-color 0.2s ease;

//   &:focus {
//     border-color: ${(props) => props.theme['purple-400']};
//     outline: none;
//     box-shadow: 0 0 0 3px ${(props) => props.theme['purple-200']};
//   }
// `

// export const FormSelect = styled.select`
//   width: 100%;
//   padding: 12px 16px;
//   border: 1px solid ${(props) => props.theme['gray-300']};
//   border-radius: 8px;
//   font-size: 16px;

//   &:focus {
//     border-color: ${(props) => props.theme['purple-400']};
//     outline: none;
//     box-shadow: 0 0 0 3px ${(props) => props.theme['purple-200']};
//   }
// `

// export const IconWrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   right: 10px;
//   transform: translateY(-50%);
//   color: ${(props) => props.theme['gray-500']};
//   cursor: pointer;
// `

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

export const TagContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-auto-flow: column;
  gap: 16px;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-rows: repeat(9, auto);
  }

  @media (max-width: 400px) {
    grid-template-rows: repeat(13, auto);
  }
`

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const LabelTags = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
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
