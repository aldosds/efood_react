import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import DishList from '../../components/DishList'
import DishHeader from '../../components/DishHeader'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

import { DadosRestaurantes } from '../Home'
import { useGetDishesQuery } from '../../services/api'
import Cart from '../../components/Cart'

const Dishes = () => {
  const { id } = useParams()

  const { data: restaurantes, isLoading } = useGetDishesQuery(id!)

  if (isLoading) {
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
      <Cart />
    </>
  )
}

export default Dishes
