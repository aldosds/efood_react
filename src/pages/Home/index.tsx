import MenuList from '../../components/MenuList'
import Food from '../../models/Food'

import estrela from '../../assets/images/estrela.svg'
import laDolceVitaTrattoria from '../../assets/images/laDolceVitaTrattoria.png'
import { Container } from '../../styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const cardapio: Food[] = [
  {
    id: 1,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: laDolceVitaTrattoria,
    infos: ['Italiana'],
    star: estrela,
    note: '4.9'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: laDolceVitaTrattoria,
    infos: ['Italiana'],
    star: estrela,
    note: '4.9'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: laDolceVitaTrattoria,
    infos: ['Italiana'],
    star: estrela,
    note: '4.9'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: laDolceVitaTrattoria,
    infos: ['Italiana'],
    star: estrela,
    note: '4.9'
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: laDolceVitaTrattoria,
    infos: ['Italiana'],
    star: estrela,
    note: '4.9'
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: laDolceVitaTrattoria,
    infos: ['Italiana'],
    star: estrela,
    note: '4.9'
  }
]

const Home = () => (
  <>
    <Header />
    <Container>
      <MenuList foods={cardapio} />
    </Container>
    <Footer />
  </>
)

export default Home
