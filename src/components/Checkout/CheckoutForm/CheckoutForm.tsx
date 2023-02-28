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
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

function SectionHeader({ title }: { title: string }) {
  return <h2 className='font-bold mb-4 text-md'>{title}</h2>
}

const CheckoutForm = () => {
  const dispatch = useDispatch()
  const formData = useSelector(selectFormData)
  const router = useRouter()
  const { data: session } = useSession()
  const [radioSelected, setRadioSelected] = useState('Standard')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    // Obtain each part of a field's name.
    // e.g., 'shippingAddress.firstName' becomes ['shippingAddress', 'firstName']
    // e.g., 'paypal' becomes ['paypal']
    let nameParts = e.target.name.split('.')

    if (nameParts.length === 1) {
      dispatch(setFormData({ formData: { ...formData, [nameParts[0]]: e.target.value } }))
    } else if (nameParts.length === 2) {
      dispatch(setFormData({ ...formData, [nameParts[0]]: { ...formData[nameParts[0]], [nameParts[1]]: e.target.value } }))
    }

    // Set radioSelected to its proper value only if the value is one of the radio values, i.e. eitehr 'Standard' or 'Express'
    if (e.target.value === 'Standard' || e.target.value === 'Express') {
      setRadioSelected(e.target.value)
    }
  }

  async function onSubmit(e) {
    e.preventDefault()
    const req = await fetch('http://localhost:3000/api/checkout/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify(formData),
      },
    })
    // router.push(/checkout/confirmation')
  }

  console.log(formData)
  return (
    <div>
      <div>
        <form onSubmit={(e) => onSubmit(e)}>
          {/* Contact */}
          <h2 className='font-bold mb-4 text-md'>Contact Information</h2>

          <Input label='Email' id='email' name='contactInformation.email' onChange={handleChange} />
          {/* Shipping */}
          <div className='mt-8'>
            <h2 className='font-bold mb-4 text-md'>Shipping Information</h2>

            {session?.user?.addresses ? (
              <div>
                <select placeholder='Choose Saved Address'>
                  <option value='' disabled selected>
                    Choose Saved Address
                  </option>
                </select>
              </div>
            ) : (
              <div>test</div>
            )}

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
              <Input intent='half' label='First Name' id='shipping-first-name' name='shippingAddress.firstName' onChange={handleChange} />
              <Input intent='half' label='Last Name' id='shipping-last-name' name='shippingAddress.lastName' onChange={handleChange} />
              <Input intent='full' label='Address' id='shipping-street' name='shippingAddress.street' onChange={handleChange} />
              <Input label='Apartment' id='shipping-unit' name='shippingAddress.unit' onChange={handleChange} />
              <Input intent='half' label='City' id='shipping-city' name='shippingAddress.city' onChange={handleChange} />
              <ShippingInfoCountrySelect id='country' name='shippingAddress.country' onChange={handleChange} />
              <Input intent='half' label='State' id='shipping-state' name='shippingAddress.state' onChange={handleChange} />
              <Input intent='half' label='Postal Code' id='shipping-postal-code' name='shippingAddress.zipCode' onChange={handleChange} />
              <Input label='Phone' id='shipping-phone' name='shippingAddress.phone' onChange={handleChange} />
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
                id='delivery-method'
                name='deliveryMethod'
                turnaroundTime='4-10 business days'
                price='$5.00'
                value='Standard'
              />
              <DeliveryMethodInput
                onChange={handleChange}
                isChecked={radioSelected}
                id='delivery-method'
                name='deliveryMethod'
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
                <RadioButton label='Credit Card' name='creditCard' onChange={handleChange} />
                <RadioButton label='Paypal' name='paypal' onChange={handleChange} />
                <RadioButton label='eTransfer' name='etransfer' onChange={handleChange} />
              </div>
            </fieldset>
            <div className='grid grid-cols-4 gap-2'>
              <Input intent='four' label='Credit Card Number' id='card-number' name='creditCard.cardNumber' onChange={handleChange} />
              <Input intent='four' label='Name on Card' id='name-on-card' name='creditCard.nameOnCard' onChange={handleChange} />
              <Input intent='three' label='Expiration Date' id='exp-date' name='creditCard.expDate' onChange={handleChange} />
              <Input label='CVC' id='cvc' name='creditCard.cvc' onChange={handleChange} />
            </div>
          </div>

          <button type='submit' className='col-start-4 col-span-9 row-start-1 text-white  border b-2  p-4 rounded-md bg-primary-600 hover:bg-primary-700'>
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  )
}

export default CheckoutForm
