import { ThemeProvider } from 'styled-components'
import { dafaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/header'

export function App() {
  return (
    <ThemeProvider theme={dafaultTheme}>
      <Header />
      <h1> Coffe Delivery </h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
