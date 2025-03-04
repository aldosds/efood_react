import styled from 'styled-components'
import { breackpoints, cores } from '../../styles'

import vetor from '../../assets/images/vetor.svg'

export const DishHeaderBar = styled.header`
  background: ${cores.begeEscura} url(${vetor});
  width: 100%;
  text-align: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 900;

    /* @media (max-width: ${breackpoints.tablet}) {
      margin: 8px;
    } */
  }

  img {
    margin-top: 60px;
    margin-bottom: 66px;
    margin-left: 89px;

    @media (max-width: ${breackpoints.tablet}) {
      margin: 60px 8px 66px;
    }
  }

  a {
    text-decoration: none;
    color: ${cores.vermelha};
  }
`

export const CartButton = styled.a`
  text-decoration: none;
  color: ${cores.vermelha};
  cursor: pointer;
`
