import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss, Container } from './styles'
import MenuList from './components/MenuList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <MenuList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
      </div>
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  )
}

export default App
