import InputFull from './FormInputs/InputFull'
import DeliveryMethodInput from './FormInputs/DeliveryMethodInput'

import inputChangeHandler from '@utils/inputChangeHandler'
import { setFormData, selectFormData } from '@slices/checkoutSlice'
import { useSelector, useDispatch } from 'react-redux'

import { useState } from 'react'
export default function DeliveryMethod() {
  const dispatch = useDispatch()
  const formData = useSelector(selectFormData)

  const [radioSelected, setRadioSelected] = useState('Standard')

  function onChange(e) {
    let { camelCaseString, value } = inputChangeHandler(e)
    dispatch(setFormData({ camelCaseString, value }))
    setRadioSelected(e.target.value)
    console.log()
  }

  return (
    <div>
      <h2 className='font-bold text-md'>Delivery Method</h2>
      {/* section grid wrapper */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4'>
        <DeliveryMethodInput
          onChange={onChange}
          isChecked={radioSelected}
          label='Standard'
          turnaroundTime='4-10 business days'
          price='$5.00'
          value='Standard'
        />
        <DeliveryMethodInput onChange={onChange} isChecked={radioSelected} label='Express' turnaroundTime='2-5 business days' price='$16.00' value='Express' />
      </div>
    </div>
  )
}
