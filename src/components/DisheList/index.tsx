import Dishe from '../Dishe'
import { Container, List } from './styles'

import Profile from '../../models/Profile'
import DisheHeader from '../DisheHeader'

type Props = {
  profiles: Profile[]
}

const DisheList = ({ profiles }: Props) => (
  <>
    <Container>
      <List>
        {profiles.map((Profile) => (
          <Dishe
            key={Profile.id}
            title={Profile.title}
            description={Profile.description}
            image={Profile.image}
          />
        ))}
      </List>
    </Container>
  </>
)

export default DisheList
