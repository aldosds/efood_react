import { HeaderBar } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="EFOOD" />
    <p>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </p>
  </HeaderBar>
)

export default Header
