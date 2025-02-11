import { useEffect, useState } from 'react'

import MenuList from '../../components/MenuList'

import { Container } from '../../styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco?: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [cardapio, setCardapio] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])

  return (
    <>
      <Header />
      <Container>
        <MenuList foods={cardapio} />
      </Container>
      <Footer />
    </>
  )
}

export default Home
