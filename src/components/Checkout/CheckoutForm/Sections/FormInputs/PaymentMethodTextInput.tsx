import { ReactChangeEvent } from '@types'
interface ITextInput {
  label: string
  name: string
  onChange: ReactChangeEvent
}
export default function TextInput(props: ITextInput) {
  const { label, name } = props
  return (
    <div className='flex flex-col gap-2'>
      <label>{label}</label>
      <div>
        <input className='block w-full' type='text' name={name} id={name} onChange={(e) => props.onChange(e)} />
      </div>
    </div>
  )
}
