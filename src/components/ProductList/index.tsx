import Product from '../Product'
import { Container, List } from './styles'

import ProfileProducts from '../../models/ProfileProducts'

type Props = {
  profiles: ProfileProducts[]
}

const ProductList = ({ profiles }: Props) => (
  <>
    <Container>
      <List>
        {profiles.map((ProfileProducts) => (
          <Product
            key={ProfileProducts.id}
            title={ProfileProducts.title}
            description={ProfileProducts.description}
            image={ProfileProducts.image}
            serve={ProfileProducts.serve}
            descriptionModal={ProfileProducts.descriptionModal}
          />
        ))}
      </List>
    </Container>
  </>
)

export default ProductList
