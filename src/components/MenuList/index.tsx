import { Food } from '../../pages/Home'
import Menu from '../Menu'
import { Container, List } from './styles'

type Props = {
  foods: Food[]
}

const MenuList = ({ foods }: Props) => (
  <>
    <Container>
      <List>
        {foods.map((food) => (
          <Menu
            key={food.id}
            title={food.titulo}
            description={food.descricao}
            image={food.capa}
            infos={food.tipo}
            star={food.destacado}
            note={food.avaliacao}
            id={food.id}
          />
        ))}
      </List>
    </Container>
  </>
)

export default MenuList
