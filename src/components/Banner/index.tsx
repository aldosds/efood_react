import { Image, NameDidk, Title } from './styles'

import bannerLaDolceVitaTrattoria from '../../assets/images/bannerLaDolceVitaTrattoria.png'

const Banner = () => (
  <Image
    style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerLaDolceVitaTrattoria})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`
    }}
  >
    <div className="container">
      <Title>Italiana</Title>
      <NameDidk>La Dolce Vita Trattoria</NameDidk>
    </div>
  </Image>
)

export default Banner
