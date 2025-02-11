import { ProfileDishes } from '../../pages/Dishes'
import { Container } from '../../styles'
import Dishe from '../Dishe'
import { List } from './styles'

type Props = {
  profiles: ProfileDishes[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const DisheList = ({ profiles }: Props) => {
  const getProfileProducts = (profile: ProfileDishes) => {
    const products = []

    if (profile.cardapio[0].preco) {
      products.push(formataPreco(profile.cardapio[0].preco))
    }

    return products
  }

  return (
    <>
      <Container>
        <List>
          {profiles.map((profile) => (
            <li key={profile.cardapio[0].id}>
              <Dishe
                id={profile.cardapio[0].id}
                title={profile.cardapio[0].nome}
                description={profile.cardapio[0].descricao}
                image={profile.cardapio[0].foto}
                serve={profile.cardapio[0].porcao}
                descriptionModal={profile.cardapio[0].descricao}
                priceModal={getProfileProducts(profile)}
              />
            </li>
          ))}
        </List>
      </Container>
    </>
  )
}

export default DisheList
