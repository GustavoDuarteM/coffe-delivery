import { ThemeProvider } from 'styled-components'
import { dafaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/header'
import { Home } from './pages/home'

export function App() {
  return (
    <ThemeProvider theme={dafaultTheme}>
      <Header />
      <Home></Home>
      <GlobalStyle />
    </ThemeProvider>
  )
}
