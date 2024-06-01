import { configureStore } from '@reduxjs/toolkit'

import carReducer from '../Reducers/Car'
import api from '../services'

export const store = configureStore({
  reducer: {
    carrinho: carReducer,
    [api.reducerPath]: api.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
