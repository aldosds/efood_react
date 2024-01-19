import { HeaderBar } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <div className="container">
      <img src={logo} alt="EFOOD" />
      <p>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </p>
    </div>
  </HeaderBar>
)

export default Header
