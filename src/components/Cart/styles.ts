import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

import lixeira from '../../assets/images/lixeira_de_reciclagem.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelha};
  z-index: 1;
  padding: 32px 8px 16px;
  max-width: 344px;
  width: 100%;

  ${ButtonContainer} {
    background-color: ${cores.begeClara};
    color: ${cores.vermelha};
    margin-left: 0;
    max-width: 100%;
    width: 100%;
  }
`

export const Card = styled.li`
  background-color: ${cores.begeClara};
  display: flex;
  /* width: 344px;
  height: 100px; */
  padding: 8px 0 12px 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const Prices = styled.div`
  color: ${cores.begeClara};
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`
