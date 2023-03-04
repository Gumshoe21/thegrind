import { useSession } from 'next-auth/react'
import { useState, useRef, useLayoutEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector, useDispatch } from 'react-redux'
import { selectModalIsOpen, setModalIsOpen } from '@slices/profileSlice'

export default function AddressesModal({ children }) {
  const dispatch = useDispatch()
  const modalIsOpen = useSelector(selectModalIsOpen)

  function closeModal(k: string) {
    dispatch(setModalIsOpen({ ...modalIsOpen, [k]: false }))
  }

  function openModal(k: string) {
    dispatch(setModalIsOpen({ ...modalIsOpen, [k]: true }))
  }
  console.log(modalIsOpen)

  const { data: session } = useSession()

  return (
    <>
      <button type='button' className='bg-primary-100 py-4 px-4 text-white rounded-sm' onClick={() => openModal('viewAddresses')}>
        View Saved Addresses
      </button>

      <Transition appear show={modalIsOpen['viewAddresses']} as={Fragment}>
        <Dialog as='div' className='relative  ' onClose={() => closeModal('viewAddresses')}>
          <Transition.Child
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            as={Fragment}
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='z-50 fixed inset-0 overflow-y-auto md:ml-[320px]'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
                as={Fragment}
              >
                <Dialog.Panel className='w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <div className='flex flex-column justify-between'>
                    <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
                      Saved Addresses
                    </Dialog.Title>
                    <div>
                      <button onClick={() => openModal('addNewAddress')} type='button' className='text-sm py-[0.15rem] px-2 rounded-md text-white bg-gray-500'>
                        Add New Address
                      </button>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      {/* If we have addresses, then display them.
                            If not, then display "No addresses saved." and "Add New Address" button. */}
                      {session?.user?.addresses ? (
                        <div>
                          {session.user.addresses.map((a) => (
                            <address>
                              <span className='font-bold'>{a.label}</span>
                              <span>
                                <span className='block'>
                                  {a.firstName} {a.lastName}
                                </span>
                                <span className='block'>
                                  {a.street}, {a.unit}
                                </span>
                                <span className='block'>
                                  {a.city}, {a.state} {a.zipCode}
                                </span>
                              </span>
                            </address>
                          ))}{' '}
                        </div>
                      ) : (
                        <div>No addresses saved.</div>
                      )}
                    </p>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={() => closeModal('viewAddresses')}
                    >
                      Close
                    </button>
                  </div>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
