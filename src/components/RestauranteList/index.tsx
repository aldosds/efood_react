import { DadosRestaurantes } from '../../pages/Home'
import Restaurante from '../Restaurante'
import { Container, List } from './styles'

type Props = {
  restaurantes: DadosRestaurantes[]
}

const RestauranteList = ({ restaurantes }: Props) => (
  <>
    <Container>
      <List>
        {restaurantes.map((restaurante) => (
          <Restaurante
            key={restaurante.id}
            title={restaurante.titulo}
            description={restaurante.descricao}
            image={restaurante.capa}
            infos={restaurante.tipo}
            star={restaurante.destacado}
            note={restaurante.avaliacao}
            id={restaurante.id}
          />
        ))}
      </List>
    </Container>
  </>
)

export default RestauranteList
