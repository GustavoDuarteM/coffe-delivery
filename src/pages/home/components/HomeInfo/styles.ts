import styled from 'styled-components'

export const HomeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export const HomeContentInfo = styled.div`
  flex: 1;
  margin-right: 3.5rem;
  & > h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
  }

  & > p {
    margin-top: 1rem;
    font-size: 20px;
  }
`

export const HomeInfoListDescp = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: start;
  align-items: center;
`

export const HomeInfoListIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  padding: 0.5rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme[props.color]};
`

export const HomeInfoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 4.125rem 0 2rem 0;
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const HomeImage = styled.div`
  visibility: visible;
  flex: 2;
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1;

  & > img {
    max-width: 29.75rem;
    width: 100%;
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }
`
