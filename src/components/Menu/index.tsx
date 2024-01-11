import Button from '../Botton'
import Note from '../Nota'
import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos, IntoTitulo, Pontuacao } from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  star: string
  note: string
}

const Menu = ({ title, description, infos, image, star, note }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <IntoTitulo>
      <div>
        <Titulo>{title}</Titulo>
      </div>
      <div>
        <Pontuacao>
          <Note>{note}</Note>
          <img src={star} alt="Estrela" />
        </Pontuacao>
      </div>
    </IntoTitulo>
    <Descricao>{description}</Descricao>
    <Button type="button" to="/menu" title="Clique aqui para saber mais">
      Saiba mais
    </Button>
  </Card>
)

export default Menu
