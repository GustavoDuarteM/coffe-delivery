import { ThemeProvider } from 'styled-components'
import { dafaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={dafaultTheme}>
      <h1> Coffe Delivery </h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
