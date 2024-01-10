import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.vermelha};
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 4px;

  display: inline-block;
  color: ${cores.begeClara};
`
