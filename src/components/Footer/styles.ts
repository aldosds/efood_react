import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background: ${cores.begeEscura};
  width: 100%;
  height: 298px;
  margin-top: 120px;
  text-align: center;

  .container {
    display: grid;
    justify-content: center;
  }

  img {
    margin-top: 40px;
  }

  p {
    font-size: 10px;
    font-weight: 400;
    margin-top: 80px;
    width: 480px;
  }
`
export const Links = styled.ul`
  display: flex;
  justify-content: center;
`

export const LinkItem = styled.li`
  margin: 0 4px;
  margin-top: -8px;
`
