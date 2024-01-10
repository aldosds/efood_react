import Button from '../Botton'
import Note from '../Nota'
import Tag from '../Tag'

import estrela from '../../assets/images/estrela.svg'

import { Card, Descricao, Titulo } from './styles'

const Menu = () => (
  <Card>
    <img src="//placehold.it/472x217" alt="" />
    <Titulo>Nome da refeiçao</Titulo>
    <Note>4.9</Note>
    <img src={estrela} alt="Estrela" />
    <Tag>Destaque da semana</Tag>
    <Tag>Japonesa</Tag>
    <Descricao>
      Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
      frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
      rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
      sem sair do lar com nosso delivery!
    </Descricao>
    <Button type="link" to="/menu" title="Clique aqui para saber mais">
      Saiba mais
    </Button>
  </Card>
)

export default Menu
