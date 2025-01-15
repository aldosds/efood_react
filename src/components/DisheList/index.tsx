import Dishe from '../Dishe'
import { Container, List } from './styles'

import ProfileDishes from '../../models/ProfileDishes'

type Props = {
  profiles: ProfileDishes[]
}

const DisheList = ({ profiles }: Props) => (
  <>
    <Container>
      <List>
        {profiles.map((ProfileDishes) => (
          <Dishe
            key={ProfileDishes.id}
            title={ProfileDishes.title}
            description={ProfileDishes.description}
            image={ProfileDishes.image}
          />
        ))}
      </List>
    </Container>
  </>
)

export default DisheList
