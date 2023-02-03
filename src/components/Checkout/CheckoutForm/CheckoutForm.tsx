import React from 'react'
import DeliveryMethodInput from './Sections/FormInputs/DeliveryMethodInput'
import RadioButton from '@ui/RadioButton'
import PaymentMethodTextInput from './Sections/FormInputs/PaymentMethodTextInput'
import ShippingInfoCountrySelect from './Sections/FormInputs/ShippingInfoCountrySelect'
import inputChangeHandler from '@utils/inputChangeHandler'
import { setFormData, selectFormData } from '@slices/checkoutSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { Input } from '@ui/Input'

function SectionHeader({ title }: { title: string }) {
  return <h2 className='font-bold mb-4 text-md'>{title}</h2>
}

const CheckoutForm = () => {
  const dispatch = useDispatch()
  const formData = useSelector(selectFormData)

  const [radioSelected, setRadioSelected] = useState('Standard')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const target = e.target as HTMLInputElement
    // console.log(e)
    let { camelCaseString, value } = inputChangeHandler(e)
    dispatch(setFormData({ camelCaseString, value }))
    // console.log(formData)
    // Prevent ring around selected delivery method from disappearing if user inputs text in another input.
    if (target.value === 'Standard' || target.value === 'Express') {
      setRadioSelected(target.value)
    }
  }

  return (
    <div>
      <div>
        <form>
          {/* Contact */}
          <h2 className='font-bold mb-4 text-md'>Contact Information</h2>

          <Input label='Email' id='email' onChange={handleChange} />
          {/* Shipping */}
          <div className='mt-8'>
            <h2 className='font-bold mb-4 text-md'>Shipping Information</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
              <Input intent='half' label='First Name' id='first-name' onChange={handleChange} />
              <Input intent='half' label='Last Name' id='last-name' onChange={handleChange} />
              <Input intent='full' label='Address' id='address' onChange={handleChange} />
              <Input label='Apartment' id='apartment' onChange={handleChange} />
              <Input intent='half' label='City' id='city' onChange={handleChange} />
              <ShippingInfoCountrySelect onChange={handleChange} />
              <Input intent='half' label='State' id='state' onChange={handleChange} />
              <Input intent='half' label='Postal Code' id='postal-code' onChange={handleChange} />
              <Input label='Phone' id='phone' onChange={handleChange} />
            </div>
          </div>
          {/* Delivery */}
          <div className='mt-8'>
            <h2 className='font-bold mb-4 text-md'>Delivery Method</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4'>
              <DeliveryMethodInput
                onChange={handleChange}
                isChecked={radioSelected}
                label='Standard'
                turnaroundTime='4-10 business days'
                price='$5.00'
                value='Standard'
              />
              <DeliveryMethodInput
                onChange={handleChange}
                isChecked={radioSelected}
                label='Express'
                turnaroundTime='2-5 business days'
                price='$16.00'
                value='Express'
              />
            </div>
          </div>
          {/* Payment */}

          <div className='mt-8'>
            <h2 className='font-bold text-md'>Payment Method</h2>
            <fieldset className='mb-4'>
              <legend className='sr-only'>Payment type</legend>
              <div className='space-y-4 flex items-end sm:items-center sm:space-y-0 sm:space-x-10 py-4 px-2 justify-between'>
                <RadioButton label='Credit Card' name='credit-card' onChange={handleChange} />
                <RadioButton label='Paypal' name='paypal' onChange={handleChange} />
                <RadioButton label='eTransfer' name='etransfer' onChange={handleChange} />
              </div>
            </fieldset>
            <div className='grid grid-cols-4  gap-2'>
              <Input intent='four' label='Credit Card Number' id='credit-card-number' onChange={handleChange} />
              <Input intent='four' label='Name on Card' id='name-on-card' onChange={handleChange} />
              <Input intent='three' label='Expiration Date' id='expiration-date' onChange={handleChange} />
              <Input label='CVC' id='cvc' onChange={handleChange} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheckoutForm
