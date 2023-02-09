import { ReactChangeEvent } from '@types'

interface IDeliveryMethodInput {
  label: string
  turnaroundTime: string
  price: string
  value: string
  isChecked: string
  onChange: ReactChangeEvent
}

const DeliveryMethodInput = (props: IDeliveryMethodInput) => {
  const { label, turnaroundTime, price, value, isChecked } = props

  return (
    <label className={`flex relative ${isChecked === props.value ? 'cursor-pointer ring-2 ring-indigo-500' : 'ring-2 ring-gray-300'} rounded-lg p-4`}>
      <input type='radio' name='delivery-method' value={value} className='sr-only' onChange={(e) => props.onChange(e)} />
      <span className='flex flex-1'>
        <span className='flex flex-col'>
          <span id='delivery-method-0-label' className='block text-sm font-medium text-gray-900'>
            {label}
          </span>
          <span id='delivery-method-0-description-0' className='mt-1 flex items-center text-sm text-gray-500'>
            {turnaroundTime}
          </span>
          <span id='delivery-method-0-description-1' className='mt-6 text-sm font-medium text-gray-900'>
            {price}
          </span>
        </span>
      </span>
      <svg
        hidden={isChecked !== props.value && 'hidden'}
        className='h-5 w-5 text-indigo-600'
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

export default DeliveryMethodInput
