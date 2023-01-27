import InputFull from './FormInputs/InputFull'

const RadioButton = (props) => {
  const { label, name } = props

  return (
    <div className='flex items-center'>
      <input id={name} name={name} type='radio' checked className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
      <label for='credit-card' className='ml-3 block text-sm font-medium text-gray-700'>
        {label}
      </label>
    </div>
  )
}

const TextInput = (props) => {
  const { label, name } = props
  return (
    <>
      <label>{label}</label>
      <div>
        <input className='block w-full' type='text' name={name} id={name} />
      </div>
    </>
  )
}

export default function PaymentMethod() {
  return (
    <div>
      <h2 className='font-bold text-md'>Payment Method</h2>
      <fieldset className='mt-4'>
        <legend className='sr-only'>Payment type</legend>
        <div className='space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10 py-4 px-2 justify-between'>
          <RadioButton label='Credit Card' name='credit-card' />
          <RadioButton label='Paypal' name='paypal' />
          <RadioButton label='eTransfer' name='etransfer' />
        </div>
      </fieldset>
      <div className='grid grid-cols-4'>
        <div className='col-span-4'>
          <TextInput label='Credit Card Number' name='credit-card-number' />
        </div>
        <div className='col-span-4'>
          <TextInput label='Name on Card' name='name-on-card' />
        </div>
        <div className='col-span-3'>
          <TextInput label='Expiration Date' name='expiration-date' />
        </div>
        <div>

          <TextInput label='CVC' name='cvc' />
                  </div>
      </div>
    </div>
  )
}
