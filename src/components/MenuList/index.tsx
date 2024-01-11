import Menu from '../Menu'
import { Container, List } from './styles'

import estrela from '../../assets/images/estrela.svg'

// type Props = {
//   // background: '#fff'
//   estrela: string
// }

// const MenuList = ({ background }: Props) => (
const MenuList = () => (
  <Container>
    <List>
      <Menu
        title="Hioki Sushi"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        image="//placehold.it/472x217"
        infos={['Destaque da semana', 'Japonesa']}
        star={estrela}
        note="4.9"
      />
      <Menu
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image="//placehold.it/472x217"
        infos={['Italiana']}
        star={estrela}
        note="4.9"
      />
      <Menu
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image="//placehold.it/472x217"
        infos={['Italiana']}
        star={estrela}
        note="4.9"
      />
      <Menu
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image="//placehold.it/472x217"
        infos={['Italiana']}
        star={estrela}
        note="4.9"
      />
      <Menu
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image="//placehold.it/472x217"
        infos={['Italiana']}
        star={estrela}
        note="4.9"
      />
      <Menu
        title="La Dolce Vita Trattoria"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        image="//placehold.it/472x217"
        infos={['Italiana']}
        star={estrela}
        note="4.9"
      />
    </List>
  </Container>
)

export default MenuList
