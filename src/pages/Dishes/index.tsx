import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import DisheList from '../../components/DisheList'

import DisheHeader from '../../components/DisheHeader'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

export type ProfileDishes = {
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
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Dishes = () => {
  const { id } = useParams()

  const [banner, setBanner] = useState<ProfileDishes>()
  const [cardapio, setCardapio] = useState<ProfileDishes[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setBanner(res))
  }, [id])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [id])

  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
  //     .then((res) => res.json())
  //     .then((res) => setCardapio(res))
  // }, [])

  if (!banner) {
    return <h3>Carregando...</h3>
  }

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

  // console.log(banner)
  console.log(cardapio)
  // console.log(typeof cardapio)

  return (
    <>
      <DisheHeader />
      <Banner banner={banner} />
      <DisheList profiles={cardapio} />
      <Footer />
    </>
  )
}

export default Dishes
