import styled from 'styled-components'
import { breackpoints, cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.vermelha};
  border: 1px solid ${cores.vermelha};
  position: relative;
  color: ${cores.begeEscura};

  img {
    padding: 8px;
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  ${ButtonContainer} {
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

// Modal
export const CardModal = styled.div`
  background-color: ${cores.vermelha};
  border: 1px solid ${cores.vermelha};
  position: relative;
  color: ${cores.begeEscura};

  .info-modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  ${ButtonContainer} {
    background-color: ${cores.begeEscura};
    color: ${cores.vermelha};
    width: 218px;
    height: 24px;
    margin: 16px 8px 60px 8px;
  }
`
export const ImageFecharModal = styled.img`
  float: right;
  margin: 8px;
  cursor: pointer;
`

export const ImageModal = styled.img`
  width: 280px;
  height: 280px;
  margin-left: 32px;
  margin-bottom: 32px;
  object-fit: cover;

  @media (max-width: ${breackpoints.desktop}) {
    margin: 16px 0;
    width: 320px;
  }

  @media (max-width: ${breackpoints.tablet}) {
    margin: 16px 0;
    width: 246px;
    height: 180px;
  }
`

export const TituloModal = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-left: 8px;
  margin-bottom: 16px;
`
export const DescricaoModal = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-left: 8px;
  margin-right: 32px;
`

export const IntoTituloModal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 8px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;

  &.visivel {
    display: flex;
  }

  .container {
    display: flex;

    @media (max-width: ${breackpoints.desktop}) {
      width: 80%;
      display: block;
      /* width: min-content; */
    }

    /* @media (max-width: ${breackpoints.tablet}) {
      max-width: 74%;
      display: block;
    } */
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
`
