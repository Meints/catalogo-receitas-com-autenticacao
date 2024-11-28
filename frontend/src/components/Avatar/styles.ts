import * as Avatar from '@radix-ui/react-avatar'
import * as Menubar from '@radix-ui/react-menubar'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const AvatarRoot = styled(Avatar.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme['gray-900']};
`

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const AvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  background: ${(props) => props.theme['gray-100']};
`

export const MenubarRoot = styled(Menubar.Root)`
  display: flex;
  padding: 3px;
  border-radius: 6px;
  z-index: 9999;
  border: none;
`

export const MenubarTrigger = styled(Menubar.Trigger)`
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  color: ${(props) => props.theme['purple-500']};
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }

  &[data-highlighted],
  &[data-state='open'] {
    background-color: #e0d8ff;
  }
`

export const MenubarContent = styled(Menubar.Content)`
  min-width: 220px;
  background-color: white;
  border-radius: 6px;
  padding: 5px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`

export const MenubarItem = styled(Menubar.Item)`
  all: unset;
  font-size: 13px;
  line-height: 1;
  color: #4a4a4a;
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 10px;
  position: relative;
  user-select: none;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &[data-state='open'] {
    background-color: #e0d8ff;
    color: ${(props) => props.theme['purple-500']};
  }

  &[data-highlighted] {
    background-color: ${(props) => props.theme['purple-200']};
    color: white;
  }

  &[data-disabled] {
    color: #b0b0b0;
    pointer-events: none;
  }
`

export const MenubarSeparator = styled(Menubar.Separator)`
  height: 1px;
  background-color: ${(props) => props.theme['purple-200']};
  margin: 5px;
`

export const RightSlot = styled.div`
  margin-left: auto;
  padding-left: 20px;
  color: ${(props) => props.theme['purple-500']};
`

export const LinkMenu = styled(Link)`
  text-decoration: none;
`
