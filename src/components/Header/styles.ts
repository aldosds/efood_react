import styled from 'styled-components'
import { cores } from '../../styles'

import vetor from '../../assets/images/vetor.svg'

export const HeaderBar = styled.header`
  background: ${cores.begeEscura} url(${vetor});
  width: 100%;
  height: 384px;
  margin-bottom: 80px;
  text-align: center;

  img {
    margin-top: 60px;
  }

  p {
    font-size: 36px;
    font-weight: 900;
    margin-top: 138px;
  }
`
