import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const DialogContainer = styled(Dialog.Root)``

export const DialogTrigger = styled(Dialog.Trigger)`
  padding: 10px 20px;
  background-color: ${(props) => props.theme['purple-500']};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['purple-600']};
  }
`

export const DialogPortal = styled(Dialog.Portal)``

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`

export const DialogContent = styled(Dialog.Content)`
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  padding: 20px;
  width: 600px;
  max-width: 90%;
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
`

export const DialogTitle = styled(Dialog.Title)`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme['gray-800']};
  margin-bottom: 10px;
`

export const DialogDescription = styled(Dialog.Description)`
  font-size: 16px;
  color: ${(props) => props.theme['gray-600']};
  margin-bottom: 20px;
`

export const DialogClose = styled(Dialog.Close)`
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};
  font-size: 24px;

  &:hover {
    color: ${(props) => props.theme['gray-700']};
  }
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
`
