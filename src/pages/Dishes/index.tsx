import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import DishList from '../../components/DishList'
import DishHeader from '../../components/DishHeader'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

export type DadosRestaurantes = {
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

  const [restaurantes, setRestaurantes] = useState<DadosRestaurantes>()
  const [carregando, setCarregando] = useState(true) // Estado de carregamento

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setRestaurantes(res)
        setCarregando(false) // Define carregando como falso após receber os dados
      })
      .catch((erro) => {
        console.error('Erro ao buscar dados:', erro)
        setCarregando(false) // Mesmo em caso de erro, para de exibir "Carregando..."
      })
  }, [id])

  if (carregando) {
    return <h3>Carregando...</h3>
  }

  if (!restaurantes) {
    // Verifica se restaurante é nulo ou indefinido
    return <h3>Restaurante não encontrado.</h3>
  }

  return (
    <>
      <DishHeader />
      <Banner banner={restaurantes} />
      <DishList profiles={[restaurantes]} />
      <Footer />
    </>
  )
}

export default Dishes
