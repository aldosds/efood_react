import { DadosRestaurantes } from '../../pages/Dishes'
import { Container } from '../../styles'
import Dish from '../Dish'
import { List } from './styles'

type Props = {
  profiles: DadosRestaurantes[]
}

export const formatarPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const DishList = ({ profiles }: Props) => {
  return (
    <>
      <Container>
        <List>
          {profiles.length > 0 && profiles[0].cardapio.length > 0 ? ( // Verifica se cardápio existe e tem itens
            profiles[0].cardapio.map((dishes) => (
              <li key={dishes.id}>
                <Dish
                  id={dishes.id}
                  title={dishes.nome}
                  description={dishes.descricao}
                  image={dishes.foto}
                  serve={dishes.porcao}
                  descriptionModal={dishes.descricao}
                  priceModal={formatarPreco(dishes.preco)}
                />
              </li>
            ))
          ) : (
            <p>Não há itens no cardápio deste restaurante!</p>
          )}
        </List>
      </Container>
    </>
  )
}

export default DishList
