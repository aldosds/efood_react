import MenuList from '../../components/MenuList'
import Food from '../../models/Food'

import estrela from '../../assets/images/estrela.svg'
import hiokiSushi from '../../assets/images/hiokiSushi.png'
import laDolceVitaTrattoria from '../../assets/images/laDolceVitaTrattoria.png'

const cardapio: Food[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: hiokiSushi,
    infos: ['Destaque da semana', 'Japonesa'],
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
    <MenuList foods={cardapio} />
  </>
)

export default Home
