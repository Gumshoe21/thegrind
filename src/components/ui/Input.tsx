import React from 'react'
import { cva } from 'class-variance-authority'

interface IInputFullProps {
  label: string
  id: string
  name: string
  full?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  intent?: 'full' | 'half' | 'three' | 'four' | null | undefined
  className?: undefined
}

const input = cva(['flex', 'flex-col', 'gap-2'], {
  variants: {
    intent: {
      half: ['sm:col-span-1'],
      full: ['sm:col-span-2'],
      three: ['col-span-3'],
      four: ['col-span-4'],
    },
    defaultVariants: {
      intent: 'full',
    },
  },
})

export const Input = ({ intent, className, ...props }: IInputFullProps) => {
  return (
    <>
      <div className={input({ intent, className })} {...props}>
        <label htmlFor={`${props.id}`}>{props.label}</label>{' '}
        <div>
          <input className='block w-full' type='text' id={`${props.id}`} name={`${props.name}`} onChange={(e) => props.onChange(e)} />
        </div>
      </div>
    </>
  )
}
