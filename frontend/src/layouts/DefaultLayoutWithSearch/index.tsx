import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { RecipeSearch } from '../../components/RecipeSearch'

export function DefaultLayoutWithSearch() {
  return (
    <LayoutContainer>
      <Header />
      <RecipeSearch />
      <Outlet />
    </LayoutContainer>
  )
}
