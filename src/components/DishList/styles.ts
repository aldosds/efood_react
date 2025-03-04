import styled from 'styled-components'
import { breackpoints } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 28px;
  margin-top: 56px;

  @media (max-width: ${breackpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: ${breackpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  .container {
    width: 1024px;
    flex-shrink: 0;
    margin: 0 auto;

    @media (max-width: ${breackpoints.desktop}) {
      width: 70%;
    }

    @media (max-width: ${breackpoints.tablet}) {
      width: 100%;
    }
  }
`
