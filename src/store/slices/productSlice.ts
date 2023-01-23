import { HYDRATE } from 'next-redux-wrapper'
import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../index'

export interface ProductState {
  mobileFiltersOpen: boolean
  checkboxes: {}
  // checkboxes interface property
}

const initialState: ProductState = {
  mobileFiltersOpen: false,
  checkboxes: {},
  // checkboxes initial state
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setMobileFiltersOpen(state, action) {
      state.mobileFiltersOpen = action.payload
    },
    setCheckboxes(state, action)  {
      state.checkboxes[action.payload] = !state.checkboxes[action.payload]
    },
  },
  // checkboxes state
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.product,
      }
    },
  },
})

export const { setMobileFiltersOpen, setCheckboxes } = productSlice.actions

export const selectMobileFiltersOpen = (state: AppState) => state.product.mobileFiltersOpen
export const selectCheckboxes = (state: AppState) => state.product.checkboxes

export default productSlice.reducer
