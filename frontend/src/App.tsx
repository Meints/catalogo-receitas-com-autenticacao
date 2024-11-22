import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { RecipeListing } from './pages/recipes-listing'
import { Header } from './components/Header'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <RecipeListing />
      <GlobalStyle />
    </ThemeProvider>
  )
}
