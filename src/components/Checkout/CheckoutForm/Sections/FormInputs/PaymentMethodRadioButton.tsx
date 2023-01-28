export default function RadioButton(props) {
  const { label, name } = props

  return (
    <div className='flex items-center'>
      <input
        id={name}
        name={name}
        type='radio'
        checked
        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
        onChange={(e) => props.onChange(e)}
      />
      <label for='credit-card' className='ml-3 block text-sm font-medium text-gray-700'>
        {label}
      </label>
    </div>
  )
}
