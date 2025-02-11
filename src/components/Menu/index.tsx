import Button from '../Button'
import Note from '../Nota'
import Tag from '../Tag'

import estrela from '../../assets/images/estrela.svg'

import {
  Card,
  Descricao,
  Titulo,
  Infos,
  IntoTitulo,
  Pontuacao,
  Image
} from './styles'

type Props = {
  title: string
  description: string
  infos: string
  image: string
  star: boolean
  note: number
  id: number
}

const Menu = ({ title, description, infos, image, note, id }: Props) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Infos>
        <Tag>{infos}</Tag>
      </Infos>
      <IntoTitulo>
        <div>
          <Titulo>{title}</Titulo>
        </div>
        <div>
          <Pontuacao>
            <Note>{note}</Note>
            <img src={estrela} alt="Estrela" />
          </Pontuacao>
        </div>
      </IntoTitulo>
      <Descricao>{description}</Descricao>
      <Button
        type="link"
        to={`/dishes/${id}`}
        title="Clique aqui para saber mais"
      >
        Saiba mais
      </Button>
    </Card>
  )
}

export default Menu
