import { EmptyContainer } from './styles'

export function EmptyRecipes() {
  return (
    <EmptyContainer>
      <h1>Ops! Não encontramos receitas com o filtro escolhido. 😓</h1>
      <p>
        Experimente ajustar os filtros ou buscar por algo diferente. Quem sabe
        não á algo delicisoso esperando por você? 🍴
      </p>
    </EmptyContainer>
  )
}
