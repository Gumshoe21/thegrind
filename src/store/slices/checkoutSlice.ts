import { HYDRATE } from 'next-redux-wrapper'
import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../index'

export interface CheckoutState {
  formData: {
    email: string
    firstName: string
    lastName: string
    address: string
    apartment: string
    city: string
    country: string
    state: string
    postalCode: string
    phone: string
    deliveryMethod: string
    paymentMethod: string
    creditCardNumber: string
    nameOnCard: string
    expirationDate: string
    cvc: string
  }
}

const initialState: CheckoutState = {
  formData: {
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
    phone: '',
    deliveryMethod: '',
    paymentMethod: '',
    creditCardNumber: '',
    nameOnCC: '',
    expDate: '',
    cvc: '',
  },
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setFormData(state, action) {
      console.log(action.payload)
      state.formData[action.payload.camelCaseString] = action.payload.value
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.checkout,
      }
    },
  },
})

export const { setFormData } = checkoutSlice.actions

export const selectFormData = (state: AppState) => state.checkout.formData

export default checkoutSlice.reducer
