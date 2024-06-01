import { configureStore } from '@reduxjs/toolkit'

import carReducer from '../Reducers/Car'

export const store = configureStore({
  reducer: {
    carrinho: carReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
