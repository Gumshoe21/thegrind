import { HYDRATE } from 'next-redux-wrapper'
import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../index'

export type Address = {
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
    contactInformation: {
      email: string
    }
    creditCard: {
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
    contactInformation: {
    email: '',
    },
    creditCard: {
      cardNumber: '',
      nameOnCard: '',
      expDate: '',
      cvc: '',
    },
    shippingAddress: initialAddressState,
    billingAddress: initialAddressState,
    deliveryMethod: '',
  },
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setFormData(state, action) {
      state.formData = action.payload
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
