import styled from 'styled-components'

export const CoffeListContainer = styled.div`
  margin-top: 8.875rem;
`

export const CoffeListTitle = styled.div`
  & > h3 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeListItems = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const CoffeCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #f3f2f2;
  border-radius: 6px 36px;
  padding: 0 20px 20px 20px;
  background-color: ${(props) => props.theme['base-card']};
`

export const CoffeImage = styled.div`
  display: flex;
  justify-content: center;
  & > img {
    width: auto;
    position: relative;
    top: -20px;
    width: 120px;
    height: 120px;
  }
`

export const CoffeTags = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 4px;

  & > span {
    border-radius: 999px;
    padding: 0.5rem 0.25rem;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
    text-transform: uppercase;
  }
`
export const CoffeName = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`
export const CoffeDescription = styled.div`
  margin-top: 0.5rem;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  text-align: center;
  color: ${(props) => props.theme['base-label']};
`

export const CoffeBuy = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`
export const CoffePrice = styled.div`
  & > span:first-child {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
  }

  & > span:last-child {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
  }
`
export const CoffeBuyActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const CoffeAmount = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  gap: 4px;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  & > button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    color: ${(props) => props.theme.purple};
  }

  & > button:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
  & > span {
    padding: 5px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
`
export const CoffeCartIncon = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  color: ${(props) => props.theme['base-card']};
  background-color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
