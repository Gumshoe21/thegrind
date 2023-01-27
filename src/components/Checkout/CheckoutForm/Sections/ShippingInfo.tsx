import InputFull from './FormInputs/InputFull'

export const CountrySelect = () => {
  return (
    <div>
      <label for='country'>Country</label>
      <div>
        <select className='block w-full' id='country' name='country' required>
          <option id='1'>United States</option>
          <option id='2'>Canada</option>
          <option id='3'>Brazil</option>
          <option id='4'>Mexico</option>
        </select>
      </div>
    </div>
  )
}

export default function ShippingInfo() {
  return (
    <div>
      <h2 className='font-bold text-md'>Shipping Information</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        <InputFull label='First Name' id='first-name' full={false} />
        <InputFull label='Last Name' id='last-name' full={false} />
        <InputFull label='Address' id='address' />
        <InputFull label='Apartment' id='apartment' />
        <InputFull label='City' id='city' full={false} />
        <CountrySelect />
        <InputFull label='State' id='state' full={false} />
        <InputFull label='Postal Code' id='postal-code' full={false} />
        <InputFull label='Phone' id='phone' />
      </div>
    </div>
  )
}
