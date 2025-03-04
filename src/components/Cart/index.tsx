import { ButtonContainer } from '../Button/styles'
import { Card, CartContainer, Overlay, Prices, Sidebar } from './styles'

import pizza from '../../assets/images/pizzaMarguerita.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatarPreco } from '../DishList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getOtalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.cardapio[0].preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <Card key={item.cardapio[0].id}>
              <img src={item.cardapio[0].foto} alt={item.cardapio[0].nome} />
              <div>
                <h3>{item.cardapio[0].nome}</h3>
                <span>{formatarPreco(item.cardapio[0].preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </Card>
          ))}
        </ul>
        <Prices>
          <p>Valor total</p>
          <p>{formatarPreco(getOtalPrice())}</p>
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
