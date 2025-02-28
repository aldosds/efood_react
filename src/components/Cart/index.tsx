import { ButtonContainer } from '../Button/styles'
import { Card, CartContainer, Overlay, Prices, Sidebar } from './styles'

import pizza from '../../assets/images/pizzaMarguerita.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <Card>
            <img src={pizza} />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <button type="button" />
          </Card>
          <Card>
            <img src={pizza} />
            <div>
              <h3>Pizza Marguerita</h3>
              <span>R$ 60,90</span>
            </div>
            <button type="button" />
          </Card>
        </ul>
        <Prices>
          <p>Valor total</p>
          <p>R$ 182,70</p>
        </Prices>
        <ButtonContainer
          title="Clique aqui para continuar com a compra"
          type="button"
        >
          Continuar com a entrega
        </ButtonContainer>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
