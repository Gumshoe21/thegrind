import { HYDRATE } from 'next-redux-wrapper'
import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../index'

export type Address = {
  label: string
  firstName: string
  lastName: string
  street: string
  unit: string
  city: string
  country: string
  state: string
  zipCode: string
  phone: string
}

const initialAddressState = {
  label: '',
  firstName: '',
  lastName: '',
  street: '',
  unit: '',
  city: '',
  country: '',
  state: '',
  zipCode: '',
  phone: '',
}

export interface CheckoutState {
  formData: {
    creditCard: {
      label: string
      cardNumber: string
      nameOnCard: string
      expDate: string
      cvc: string
    }
    shippingAddress: Address
    billingAddress: Address
    deliveryMethod: string
  }
}

const initialState: CheckoutState = {
  formData: {
    creditCard: {
      label: '',
      cardNumber: '',
      nameOnCard: '',
      expDate: '',
      cvc: '',
    },
    shippingAddress: initialAddressState,
    billingAddress: initialAddressState,
    deliveryMethod: ''
  },
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setFormData(state, action) {
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
