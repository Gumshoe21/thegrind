export default function ShippingInfoCountrySelect(props) {
  return (
    <div className='flex flex-col justify-between'>
      <label htmlFor='country'>Country</label>
      <div>
        <select className='block w-full' id={props.id} name={props.name} onChange={(e) => props.onChange(e)}>
          <option id='1'>United States</option>
          <option id='2'>Canada</option>
          <option id='3'>Brazil</option>
          <option id='4'>Mexico</option>
        </select>
      </div>
    </div>
  )
}
