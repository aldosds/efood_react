import { useEffect, useState } from 'react'

import { useGetRestauranteQuery } from '../../services/api'

import RestauranteList from '../../components/RestauranteList'

import { Container } from '../../styles'
import Header from '../../components/Header'
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
      preco?: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestauranteQuery()

  if (isLoading) {
    // Usando isLoading para verificar o carregamento
    return <h3>Carregando...</h3>
  }

  if (!restaurantes) {
    // Adicionado uma verificação para cardapio nulo ou indefinido para evitar erros.
    return <h3>Erro ao carregar os dados.</h3>
  }

  return (
    <>
      <Header />
      <Container>
        <RestauranteList restaurantes={restaurantes} />
      </Container>
      <Footer />
    </>
  )
}

export default Home
