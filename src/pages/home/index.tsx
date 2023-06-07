
import { HomeInfo } from './components/HomeInfo'
import { HomeContainer } from './styles'
import { CoffeList } from './components/CoffeList'

export function Home() {
  return (
    <HomeContainer>
      <HomeInfo />
      <CoffeList />
    </HomeContainer>
  )
}
