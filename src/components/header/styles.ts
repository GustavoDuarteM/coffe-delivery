import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 160px;
`

export const CompanyLogo = styled.img``

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`
export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const CartIcon = styled.div`
  border-radius: 6px;
  padding: 8px;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const CartCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  position: relative;
  left: -12px;
  top: -17px;

  border-radius: 999px;
  font-size: 12px;
  color: ${(props) => props.theme['yellow-light']};
  background-color: ${(props) => props.theme['yellow-dark']};
`

export const LocationCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 8px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`
