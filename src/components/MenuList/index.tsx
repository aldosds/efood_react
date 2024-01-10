import Menu from '../Menu'
import { Container, List } from './styles'

// type Props = {
//   background: '#fff'
// }

// const MenuList = ({ background }: Props) => (
const MenuList = () => (
  <Container>
    <List>
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
    </List>
  </Container>
)

export default MenuList
