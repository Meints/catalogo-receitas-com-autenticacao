import React, { useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import {
  FormField,
  FormLabel,
  FormControl,
  FormInput,
  IconWrapper,
  StyledTextArea,
  StyledSelect,
} from './styles'
import { Eye, EyeSlash } from '@phosphor-icons/react'

type FormFieldProps = {
  label: string
  name: string
  placeholder?: string
  type?: string
  icon?: React.ReactNode
  register?: UseFormRegisterReturn
  isTextArea?: boolean
  required?: boolean
  disabled?: boolean
  min?: number
  options?: { value: string; label: string }[]
  accept?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function FormFieldComponent({
  label,
  name,
  placeholder,
  type = 'text',
  icon,
  register,
  isTextArea = false,
  required = false,
  disabled = false,
  min,
  options,
  accept,
  onChange,
}: Readonly<FormFieldProps>) {
  const [showPassword, setShowPassword] = useState(false) // Estado para controlar a visibilidade da senha

  return (
    <FormField name={name}>
      <FormLabel>
        {label}
        {required && <span>*</span>}
      </FormLabel>
      <FormControl>
        {(() => {
          if (type === 'file') {
            return (
              <FormInput
                type="file"
                {...register}
                required={required}
                disabled={disabled}
                accept={accept}
                onChange={onChange}
              />
            )
          } else if (options) {
            return (
              <StyledSelect
                {...register}
                required={required}
                disabled={disabled}
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </StyledSelect>
            )
          } else if (isTextArea) {
            return (
              <StyledTextArea
                {...register}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
              />
            )
          } else if (type === 'password') {
            return (
              <>
                <FormInput
                  type={showPassword ? 'text' : 'password'}
                  {...register}
                  placeholder={placeholder}
                  required={required}
                  disabled={disabled}
                  min={min}
                />
                <IconWrapper onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Eye size={20} /> : <EyeSlash size={20} />}
                </IconWrapper>
              </>
            )
          } else {
            return (
              <FormInput
                type={type}
                {...register}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                min={min}
              />
            )
          }
        })()}
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </FormControl>
    </FormField>
  )
}
