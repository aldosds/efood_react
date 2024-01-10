import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const NoteContainer = styled.div<Props>`
  background-color: ${cores.vermelha};
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 4px;
  margin-right: 8px;
  display: inline-block;
  color: ${cores.begeClara};
`
