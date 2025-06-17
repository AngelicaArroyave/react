import { configureStore } from '@reduxjs/toolkit'

import { counterSlice } from './counter/counterSlice'
import { pokemonSlice } from './pokemon/pokemonSlice'
import { todoApi } from '../apis/todoApi'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemon: pokemonSlice.reducer,
        
        [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todoApi.middleware),
})