import { setFormData, selectFormData } from '@slices/checkoutSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import inputChangeHandler from '@utils/inputChangeHandler'
interface IInputFullProps {
  label: string
  id: string
  full?: boolean
}

export default function InputFull({ label, id, full = true }: IInputFullProps) {
  const dispatch = useDispatch()
  const formData = useSelector(selectFormData)

  function onChange(e) {
    // console.log(e)
    let { camelCaseString, value } = inputChangeHandler(e)
    dispatch(setFormData({ camelCaseString, value }))
  }

  // console.log(formData)

  return (
    <div className={`${full ? 'sm:col-span-2' : ''}`}>
      <label for={`${id}`}>{label}</label>
      <div className='mt-2'>
        <input className='block w-full rounded-md' type='text' id={`${id}`} name={`${id}`} required onChange={(e) => onChange(e)} />
      </div>
    </div>
  )
}

export const DeliveryMethodInput = (props) => {
  const { label, turnaroundTime, price, value, isChecked } = props

  function onChange(e) {

    props.onChange(e)
  }

  return (
    <label className={`flex relative ${isChecked === props.value ? 'cursor-pointer ring-2 ring-indigo-500' : 'ring-2 ring-gray-300'} rounded-lg p-4`}>
      <input type='radio' name='delivery-method' value={value} className='sr-only' onChange={(e) => onChange(e)} />
      <span className='flex flex-1'>
        <span class='flex flex-col'>
          <span id='delivery-method-0-label' class='block text-sm font-medium text-gray-900'>
            {label}
          </span>
          <span id='delivery-method-0-description-0' class='mt-1 flex items-center text-sm text-gray-500'>
            {turnaroundTime}
          </span>
          <span id='delivery-method-0-description-1' class='mt-6 text-sm font-medium text-gray-900'>
            {price}
          </span>
        </span>
      </span>
      {/*Check icon TODO add hide on select */}
      <svg
        hidden={isChecked !== props.value && true}
        class='h-5 w-5 text-indigo-600'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        aria-hidden='true'
      >
        <path
          fill-rule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
          clip-rule='evenodd'
        />
      </svg>
    </label>
  )
}
