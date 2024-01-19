import { FooterContainer, LinkItem, Links } from './styles'

import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <div>
        <img src={logo} alt="EFOOD" />
      </div>
      <Links>
        <LinkItem>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </LinkItem>
        <LinkItem>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
        </LinkItem>
        <LinkItem>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
        </LinkItem>
      </Links>
      <div>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </div>
    </div>
  </FooterContainer>
)

export default Footer
