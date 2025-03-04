import styled from 'styled-components'
import { breackpoints } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;

  @media (max-width: ${breackpoints.desktop}) {
    grid-template-columns: 1fr;
    width: min-content;
  }
`
