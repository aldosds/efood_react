import { DishHeaderBar, CartButton } from './styles'

import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const DishHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <DishHeaderBar>
      <div className="container">
        <Link to="/">Restaurantes</Link>
        <img src={logo} alt="EFOOD" />
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </div>
    </DishHeaderBar>
  )
}

export default DishHeader
