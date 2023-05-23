import {
  Cart,
  CartCounter,
  CartIcon,
  CompanyLogo,
  HeaderContainer,
  HeaderNav,
  LocationCard,
} from './styles'
import companyLogo from './../../assets/CompanyLogo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <CompanyLogo src={companyLogo} alt="" />
      <HeaderNav>
        <LocationCard>
          <MapPin size={24} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationCard>
        <Cart>
          <CartIcon>
            <ShoppingCart size={24} weight="fill" />
          </CartIcon>
          <CartCounter>3</CartCounter>
        </Cart>
      </HeaderNav>
    </HeaderContainer>
  )
}
