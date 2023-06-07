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

import { coffeData } from '../../../../assets/coffe_data'
const IMG_DIR = '/src/assets/coffes/'

export function CoffeList() {
  return (
    <CoffeListContainer>
      <CoffeListTitle>
        <h3>Nossos cafés</h3>
      </CoffeListTitle>
      <CoffeListItems>
        {coffeData.map((coffe) => (
          <CoffeCard key={coffe.id}>
            <CoffeImage>
              <img src={IMG_DIR + coffe.image} />
            </CoffeImage>

            <CoffeTags>
              {coffe.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </CoffeTags>
            <CoffeName>
              <span>{coffe.name}</span>
            </CoffeName>
            <CoffeDescription>
              <span>{coffe.description}</span>
            </CoffeDescription>
            <CoffeBuy>
              <CoffePrice>
                <span>R$ </span>
                <span>{coffe.price}</span>
              </CoffePrice>
              <CoffeBuyActions>
                <CoffeAmount>
                  <button>
                    <Minus size={16} />
                  </button>
                  <span>{0}</span>
                  <button>
                    <Plus size={16} />
                  </button>
                </CoffeAmount>
                <CoffeCartIncon>
                  <ShoppingCart size={24} weight="fill" />
                </CoffeCartIncon>
              </CoffeBuyActions>
            </CoffeBuy>
          </CoffeCard>
        ))}
      </CoffeListItems>
    </CoffeListContainer>
  )
}
