import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DadosRestaurantes } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurante: builder.query<DadosRestaurantes[], void>({
      query: () => 'restaurantes'
    }),
    getDishes: builder.query<DadosRestaurantes, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestauranteQuery, useGetDishesQuery } = api

export default api
