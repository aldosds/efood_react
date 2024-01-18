import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.vermelha};
  border: 1px solid ${cores.vermelha};
  position: relative;
  color: ${cores.begeEscura};

  img {
    padding: 8px;
  }

  ${ButtonLink} {
    background-color: ${cores.begeEscura};
    color: ${cores.vermelha};
    width: 304px;
    height: 24px;
    margin: 8px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-left: 8px;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-left: 8px;
  margin-right: 8px;
`

export const IntoTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 8px;
`
