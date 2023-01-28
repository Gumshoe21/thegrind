import { setFormData, selectFormData } from '@slices/checkoutSlice'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react'

import inputChangeHandler from '@utils/inputChangeHandler'
interface IInputFullProps {
  label: string
  id: string
  full?: boolean
  onChange: (e: React.FormEvent<HTMLInputElement>) => {}
}

export default function InputFull(props: IInputFullProps) {
  const { label, id, full = true } = props
  return (
    <div className={`${full ? 'sm:col-span-2' : ''} flex flex-col gap-2`}>
      <label for={`${id}`}>{label}</label>
      <div>
        <input className='block w-full' type='text' id={`${id}`} name={`${id}`} required onChange={(e) => props.onChange(e)} />
      </div>
    </div>
  )
}
