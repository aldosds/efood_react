import styled from 'styled-components'
import { breackpoints } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;

  @media (max-width: ${breackpoints.desktop}) {
    gap: 30px;
    width: min-content;
    margin: auto;
  }

  @media (max-width: ${breackpoints.tablet}) {
    grid-template-columns: 1fr;
    width: min-content;
  }
`
