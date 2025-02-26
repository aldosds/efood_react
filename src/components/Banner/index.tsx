import { DadosRestaurantes } from '../../pages/Home'
import { Image, NameRest, Title } from './styles'

type Props = {
  banner: DadosRestaurantes
}

const Banner = ({ banner }: Props) => (
  <Image
    key={banner.id}
    style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner.capa})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`
    }}
  >
    <div className="container">
      <Title>{banner.tipo}</Title>
      <NameRest>{banner.titulo}</NameRest>
    </div>
  </Image>
)

export default Banner
