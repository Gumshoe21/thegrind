import { HYDRATE } from 'next-redux-wrapper'
import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../index'

export interface ProductState {
  mobileFiltersOpen: boolean
}

const initialState: ProductState = {
  mobileFiltersOpen: false,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setMobileFiltersOpen(state, action) {
      state.mobileFiltersOpen = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.product,
      }
    },
  },
})

export const { setMobileFiltersOpen } = productSlice.actions

export const selectMobileFiltersOpen = (state: AppState) => state.product.mobileFiltersOpen

export default productSlice.reducer
