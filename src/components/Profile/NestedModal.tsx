import { useSession } from 'next-auth/react'
import { useState, useRef, useLayoutEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAddressForm, setAddressForm, selectModalIsOpen, setModalIsOpen } from '@slices/profileSlice'

export default function NestedModal() {
  const dispatch = useDispatch()

  const addressForm = useSelector(selectAddressForm)
  const modalIsOpen = useSelector(selectModalIsOpen)
  function closeModal(k: string) {
    dispatch(setModalIsOpen({ ...modalIsOpen, [k]: false }))
  }

  function openModal(k: string) {
    dispatch(setModalIsOpen({ ...modalIsOpen, [k]: true }))
  }

  function handleChange(e) {
    console.log(e.target.name, e.target.value)
    dispatch(setAddressForm({ ...addressForm, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/addNewAddress`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ addressForm }),
    })
  }

  console.log(addressForm)
  return (
    <Transition appear show={modalIsOpen['addNewAddress']}>
      {/* Set z-index to 51 due to Headless UI Dialogs having a default z-index of 50. 
              51 will place our nested modal on top of our parent modal. */}
      <Dialog as='div' className='z-[51] relative' onClose={() => closeModal('addNewAddress')}>
        <Transition.Child
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto md:ml-[320px]'>
          <div className='flex min-h-full items-center justify-center p-4 text-center '>
            <Transition.Child
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-sm transform bg-blue z-100 overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <div className='flex flex-column justify-between'>
                  <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
                    Add New Address
                  </Dialog.Title>
                </div>
                <div className='mt-2'>
                  {/* Form */}
                  <form onSubmit={(e) => handleSubmit(e)}>
                    {/* grid container */}
                    <div className='grid grid-cols-2 gap-2'>
                      <div className='col-span-2'>
                        <div>
                          <input className='block w-full' name='label' type='text' placeholder='Label' onChange={(e) => handleChange(e)} />
                        </div>
                      </div>
                      <div className='col-span-1'>
                        <div>
                          <input className='block w-full' name='firstName' type='text' placeholder='First Name' onChange={(e) => handleChange(e)} />
                        </div>
                      </div>
                      <div className='col-span-1'>
                        <input
                          className='block w-full'
                          name='lastName'
                          type='text'
                          placeholder='Last Name'
                          onChange={(e) => handleChange(e)}
                          value={addressForm.lastName}
                        />
                      </div>
                      <div className='col-span-2'>
                        <input
                          className='block w-full'
                          name='street'
                          type='text'
                          placeholder='Street'
                          onChange={(e) => handleChange(e)}
                          value={addressForm.street}
                        />
                      </div>
                      <div className='col-span-1'>
                        <input className='block w-full' name='unit' type='text' placeholder='Unit' onChange={(e) => handleChange(e)} value={addressForm.unit} />
                      </div>
                      <div className='col-span-1'>
                        <input className='block w-full' name='city' type='text' placeholder='City' onChange={(e) => handleChange(e)} value={addressForm.city} />
                      </div>
                      <div className='col-span-1'>
                        <input
                          className='block w-full'
                          name='country'
                          type='text'
                          placeholder='Country'
                          onChange={(e) => handleChange(e)}
                          value={addressForm.country}
                        />
                      </div>
                      <div className='col-span-1'>
                        <input
                          className='block w-full'
                          name='state'
                          type='text'
                          placeholder='State'
                          onChange={(e) => handleChange(e)}
                          value={addressForm.state}
                        />
                      </div>
                      <div className='col-span-1'>
                        <input
                          className='block w-full'
                          name='zipCode'
                          type='text'
                          placeholder='Zip Code'
                          onChange={(e) => handleChange(e)}
                          value={addressForm.zipCode}
                        />
                      </div>
                      <div className='col-span-1'>
                        <input
                          className='block w-full'
                          name='phone'
                          type='text'
                          placeholder='Phone'
                          onChange={(e) => handleChange(e)}
                          value={addressForm.phone}
                        />
                      </div>
                      {/* submit */}
                      <div className='col-span-2 mt-4 flex flex-col'>
                        <button
                          className='rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                          onClick={() => closeModal('addNewAddress')}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
