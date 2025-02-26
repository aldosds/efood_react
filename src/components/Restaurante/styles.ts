import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  border: 1px solid ${cores.vermelha};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Image = styled.img`
  width: 472px;
  height: 217px;
  object-fit: cover;
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
  margin-right: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 0;
`

export const IntoTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 8px;
`

export const Pontuacao = styled.div`
  display: flex;
`
