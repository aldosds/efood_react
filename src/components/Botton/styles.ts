import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.vermelha};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  display: inline-block;
  color: ${cores.begeClara};
  border: none;
  margin: 16px 0 8px 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.vermelha};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  display: inline-block;
  text-decoration: none;
  color: ${cores.begeClara};
  margin: 16px 0 8px 8px;
`
