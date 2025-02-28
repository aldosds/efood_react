import { DishHeaderBar, CartButton } from './styles'

import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const DishHeader = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <DishHeaderBar>
      <div className="container">
        <Link to="/">Restaurantes</Link>
        <img src={logo} alt="EFOOD" />
        <CartButton onClick={openCart}>0 produto(s) no carrinho</CartButton>
      </div>
    </DishHeaderBar>
  )
}

export default DishHeader
