import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DadosRestaurantes } from '../../pages/Home'

type CartState = {
  items: DadosRestaurantes[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<DadosRestaurantes>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
