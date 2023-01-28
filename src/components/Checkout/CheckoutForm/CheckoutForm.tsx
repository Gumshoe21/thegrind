import DeliveryMethodInput from './Sections/FormInputs/DeliveryMethodInput'
import InputFull from './Sections/FormInputs/InputFull'
import PaymentMethodRadioButton from './Sections/FormInputs/PaymentMethodRadioButton'
import PaymentMethodTextInput from './Sections/FormInputs/PaymentMethodTextInput'
import ShippingInfoCountrySelect from './Sections/FormInputs/ShippingInfoCountrySelect'
import inputChangeHandler from '@utils/inputChangeHandler'
import { setFormData, selectFormData } from '@slices/checkoutSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
const CheckoutForm = () => {
  const dispatch = useDispatch()
  const formData = useSelector(selectFormData)

  const [radioSelected, setRadioSelected] = useState('Standard')

  function handleChange(e) {
    // console.log(e)
    let { camelCaseString, value } = inputChangeHandler(e)
    dispatch(setFormData({ camelCaseString, value }))
    // console.log(formData)
    // Prevent ring around selected delivery method from disappearing if user inputs text in another input.
    if (e.target.value === 'Standard' || e.target.value === 'Express') {
      setRadioSelected(e.target.value)
    }
  }
  return (
    <div>
      <div>
        <form>
          {/* Contact */}
          <h2 className='font-bold mb-4 text-md'>Contact Information</h2>
          <InputFull label='Email' id='email' onChange={handleChange} />
          {/* Shipping */}
          <div className='mt-8'>
            <h2 className='font-bold mb-4 text-md'>Shipping Information</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
              <InputFull label='First Name' id='first-name' full={false} onChange={handleChange} />
              <InputFull label='Last Name' id='last-name' full={false} onChange={handleChange} />
              <InputFull label='Address' id='address' onChange={handleChange} />
              <InputFull label='Apartment' id='apartment' onChange={handleChange} />
              <InputFull label='City' id='city' full={false} onChange={handleChange} />
              <ShippingInfoCountrySelect onChange={handleChange} />
              <InputFull label='State' id='state' full={false} onChange={handleChange} />
              <InputFull label='Postal Code' id='postal-code' full={false} onChange={handleChange} />
              <InputFull label='Phone' id='phone' onChange={handleChange} />
            </div>
          </div>
          {/* Delivery */}

          <div className='mt-8'>
            <h2 className='font-bold mb-4 text-md'>Delivery Method</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4'>
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
              <div className='space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10 py-4 px-2 justify-between'>
                <PaymentMethodRadioButton label='Credit Card' name='credit-card' onChange={handleChange} />
                <PaymentMethodRadioButton label='Paypal' name='paypal' onChange={handleChange} />
                <PaymentMethodRadioButton label='eTransfer' name='etransfer' onChange={handleChange} />
              </div>
            </fieldset>
            <div className='grid grid-cols-4  gap-2'>
              <div className='col-span-4'>
                <PaymentMethodTextInput label='Credit Card Number' name='credit-card-number' onChange={handleChange} />
              </div>
              <div className='col-span-4'>
                <PaymentMethodTextInput label='Name on Card' name='name-on-card' onChange={handleChange} />
              </div>
              <div className='col-span-3'>
                <PaymentMethodTextInput label='Expiration Date' name='expiration-date' onChange={handleChange} />
              </div>
              <div>
                <PaymentMethodTextInput label='CVC' name='cvc' onChange={handleChange} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheckoutForm
