import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { productSlice } from './slices/productSlice'
import { createWrapper } from 'next-redux-wrapper'

export const makeStore = () =>
  configureStore({
    reducer: {
      [productSlice.name]: productSlice.reducer,
    },
    devTools: true,
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore /*{ debug: true }*/)