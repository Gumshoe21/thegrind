import { HYDRATE } from 'next-redux-wrapper'
import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../index'
import { Address } from '@types'

export interface ProfileState {
  addressForm: Address
  modalIsOpen: {
    viewAddresses: boolean
    addNewAddress: boolean
  }
}

const initialState: ProfileState = {
  addressForm: {
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
  },
  modalIsOpen: {
    viewAddresses: false,
    addNewAddress: false,
  },
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setAddressForm(state, action) {
      state.addressForm = action.payload
    },
    setModalIsOpen(state, action) {
      state.modalIsOpen = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.profile,
      }
    },
  },
})

export const { setAddressForm } = profileSlice.actions
export const { setModalIsOpen } = profileSlice.actions
export const selectAddressForm = (state: AppState) => state.profile.addressForm
export const selectModalIsOpen = (state: AppState) => state.profile.modalIsOpen
export default profileSlice.reducer
