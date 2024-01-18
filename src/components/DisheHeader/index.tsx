import { DisheHeaderBar } from './styles'

import logo from '../../assets/images/logo.svg'

const DisheHeader = () => (
  <DisheHeaderBar>
    <a href="/">Restaurantes</a>
    <img src={logo} alt="EFOOD" />
    <a href="#">0 produto(s) no carrinho</a>
  </DisheHeaderBar>
)

export default DisheHeader
