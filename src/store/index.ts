import { configureStore } from '@reduxjs/toolkit'

import CartReducer from './reducers/cart'

import api from '../services/api'

export const store = configureStore({
    reducer: {
        cart: CartReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootReducer = ReturnType<typeof store.getState>
