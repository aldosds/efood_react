import { DishHeaderBar } from './styles'

import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const DishHeader = () => (
  <DishHeaderBar>
    <div className="container">
      <Link to="/">Restaurantes</Link>
      <img src={logo} alt="EFOOD" />
      <a href="#">0 produto(s) no carrinho</a>
    </div>
  </DishHeaderBar>
)

export default DishHeader
