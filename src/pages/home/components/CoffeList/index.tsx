import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CoffeAmount,
  CoffeBuy,
  CoffeBuyActions,
  CoffeCard,
  CoffeCartIncon,
  CoffeDescription,
  CoffeImage,
  CoffeListContainer,
  CoffeListItems,
  CoffeListTitle,
  CoffeName,
  CoffePrice,
  CoffeTags,
} from './styles'

import coffeImg from './../../../../assets/coffes/Type=Expresso.png'

export function CoffeList() {
  return (
    <CoffeListContainer>
      <CoffeListTitle>
        <h3>Nossos cafés</h3>
      </CoffeListTitle>
      <CoffeListItems>
        <CoffeCard>
          <CoffeImage>
            <img src={coffeImg} />
          </CoffeImage>

          <CoffeTags>
            <span>Tradicional</span>
          </CoffeTags>
          <CoffeName>
            <span>Expresso Tradicional</span>
          </CoffeName>
          <CoffeDescription>
            <span>O tradicional café feito com água quente e grãos moídos</span>
          </CoffeDescription>
          <CoffeBuy>
            <CoffePrice>
              <span>R$ </span>
              <span>99,99</span>
            </CoffePrice>
            <CoffeBuyActions>
              <CoffeAmount>
                <Minus size={16} />
                <span>1</span>
                <Plus size={16} />
              </CoffeAmount>
              <CoffeCartIncon>
                <ShoppingCart size={24} weight="fill" />
              </CoffeCartIncon>
            </CoffeBuyActions>
          </CoffeBuy>
        </CoffeCard>
      </CoffeListItems>
    </CoffeListContainer>
  )
}
