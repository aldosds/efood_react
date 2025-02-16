import styled from 'styled-components'
import { cores } from '../../styles'

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
  }

  img {
    margin-top: 60px;
    margin-bottom: 66px;
    margin-left: 89px;
  }

  a {
    text-decoration: none;
    color: ${cores.vermelha};
  }
`
