import Menu from '../Menu'
import { Container, List } from './styles'

import Food from '../../models/Food'

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
            title={food.title}
            description={food.description}
            image={food.image}
            infos={food.infos}
            star={food.star}
            note={food.note}
          />
        ))}
      </List>
    </Container>
  </>
)

export default MenuList
