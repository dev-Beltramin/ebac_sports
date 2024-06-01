import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

type CarProps = {
  items: Produto[]
}

const initialState: CarProps = {
  items: []
}

const carSlice = createSlice({
  name: 'carrinho',
  initialState,

  reducers: {
    addCar: (state, action: PayloadAction<Produto>) => {
      const products = action.payload

      if (state.items.find((product) => product.id === products.id)) {
        alert('item já existente no carrinho')
      } else {
        state.items.push(products)
      }
    }
  }
})

export const { addCar } = carSlice.actions
export default carSlice.reducer
