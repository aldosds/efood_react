import { DisheHeaderBar } from './styles'

import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const DisheHeader = () => (
  <DisheHeaderBar>
    <div className="container">
      <Link to="/">Restaurantes</Link>
      <img src={logo} alt="EFOOD" />
      <a href="#">0 produto(s) no carrinho</a>
    </div>
  </DisheHeaderBar>
)

export default DisheHeader
