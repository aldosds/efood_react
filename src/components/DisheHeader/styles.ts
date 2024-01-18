import styled from 'styled-components'
import { cores } from '../../styles'

import vetor from '../../assets/images/vetor.svg'

export const DisheHeaderBar = styled.header`
  background: ${cores.begeEscura} url(${vetor});
  width: 100%;
  margin-bottom: 56px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  font-weight: 900;

  img {
    margin-top: 60px;
    margin-bottom: 66px;
  }

  a {
    text-decoration: none;
    color: ${cores.vermelha};
  }
`
