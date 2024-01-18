import Button from '../Button'

import { Card, Descricao, Titulo, IntoTitulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Dishe = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <IntoTitulo>
      <div>
        <Titulo>{title}</Titulo>
      </div>
    </IntoTitulo>
    <Descricao>{description}</Descricao>
    <Button type="link" to="/dishes" title="Clique aqui para saber mais">
      Adicionar ao carrinho
    </Button>
  </Card>
)

export default Dishe
