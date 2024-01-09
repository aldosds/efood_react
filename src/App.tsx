import Header from './components/Header'
import { GlobalCss, Container } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
      </div>
      <Container>Listagem</Container>
    </>
  )
}

export default App
