import styled from 'styled-components'
import { breackpoints, cores } from '../../styles'

import vetor from '../../assets/images/vetor.svg'

export const HeaderBar = styled.header`
  background: ${cores.begeEscura} url(${vetor});
  width: 100%;
  height: 384px;
  margin-bottom: 80px;
  text-align: center;

  @media (max-width: ${breackpoints.tablet}) {
    margin-bottom: 40px;
  }

  img {
    margin-top: 60px;
  }

  p {
    font-size: 36px;
    font-weight: 900;
    margin-top: 138px;

    @media (max-width: ${breackpoints.tablet}) {
      margin-top: 20px;
    }
  }
`
