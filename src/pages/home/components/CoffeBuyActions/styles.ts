import styled from 'styled-components'

export const CoffeBuyActionsContainer = styled.div`
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
