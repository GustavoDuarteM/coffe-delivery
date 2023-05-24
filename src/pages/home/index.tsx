import {
  HomeContainer,
  HomeImage,
  HomeInfo,
  HomeInfoList,
  HomeInfoListIcon,
  HomeInfoListDescp,
} from './styles'
import cupCoffee from './../../assets/intro_cup_coffee.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <HomeInfo>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <HomeInfoList>
          <HomeInfoListDescp>
            <HomeInfoListIcon color="yellow-dark">
              <ShoppingCart size={20} weight="fill" />
            </HomeInfoListIcon>
            <p>Compra simples e segura</p>
          </HomeInfoListDescp>
          <HomeInfoListDescp>
            <HomeInfoListIcon color="base-text">
              <Package size={20} weight="fill" />
            </HomeInfoListIcon>
            <p>Embalagem mantém o café intacto</p>
          </HomeInfoListDescp>
          <HomeInfoListDescp>
            <HomeInfoListIcon color="yellow">
              <Timer size={20} weight="fill" />
            </HomeInfoListIcon>
            <p>Entrega rápida e rastreada</p>
          </HomeInfoListDescp>
          <HomeInfoListDescp>
            <HomeInfoListIcon color="purple">
              <Coffee size={20} weight="fill" />
            </HomeInfoListIcon>
            <p>O café chega fresquinho até você</p>
          </HomeInfoListDescp>
        </HomeInfoList>
      </HomeInfo>
      <HomeImage>
        <img src={cupCoffee} alt="" />
      </HomeImage>
    </HomeContainer>
  )
}
