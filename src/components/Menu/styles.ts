import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  border: 1px solid ${cores.vermelha};

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 8px 0 16px 7px;
`
export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-left: 8px;
`
