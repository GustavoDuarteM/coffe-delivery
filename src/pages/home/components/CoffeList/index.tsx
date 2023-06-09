import {
  CoffeBuy,
  CoffeCard,
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
import { CoffeBuyActions } from '../CoffeBuyActions'

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
              <img src={IMG_DIR + coffe.image} alt={coffe.name} />
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
              <CoffeBuyActions coffeId={coffe.id.toString()} />
            </CoffeBuy>
          </CoffeCard>
        ))}
      </CoffeListItems>
    </CoffeListContainer>
  )
}
