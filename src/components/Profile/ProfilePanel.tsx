import { Tab } from '@headlessui/react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function ProfilePanel() {
  let [isOpen, setIsOpen] = useState({
    viewAddresses: false,
    addNewAddress: false,
  })
  function closeModal(k: string) {
    setIsOpen((prevState) => ({ ...isOpen, [k]: false }))
  }

  function openModal(k: string) {
    setIsOpen((prevState) => ({ ...isOpen, [k]: true }))
  }

  const { data: session } = useSession()
  const NestedModal = () => {
    return (
      <Fragment>
        <Transition appear show={isOpen['addNewAddress']} as={Fragment}>
          {/* Set z-index to 51 due to Headless UI Dialogs having a default z-index of 50. 
              51 will place our nested modal on top of our parent modal. */}
          <Dialog as='div' className='z-[51] relative' onClose={() => closeModal('addNewAddress')}>
            <Transition.Child
              as={Fragment}
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
              <div className='flex min-h-full items-center justify-center p-4 text-center bg-blue-400'>
                <Transition.Child
                  as={Fragment}
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
                        Saved Addresses
                      </Dialog.Title>
                    </div>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                        {/* If we have addresses, then display them
                              if not, then display something like "no saved addresses" and "add new address" */}
                        {session?.user?.addresses?.length > 0 ? <div>1 </div> : <div>No addresses saved.</div>}
                      </p>
                    </div>

                    <div className='mt-4'>
                      <button
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                        onClick={() => closeModal('addNewAddress')}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </Fragment>
    )
  }
  const AddressesModal = ({ children }) => {
    return (
      <>
        <Transition appear show={isOpen['viewAddresses']} as={Fragment}>
          <Dialog as='div' className='relative  ' onClose={() => closeModal('viewAddresses')}>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <div className='z-50 fixed inset-0  overflow-y-auto md:ml-[320px]'>
              <div className='flex min-h-full items-center justify-center p-4 text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                    <div className='flex flex-column justify-between'>
                      <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
                        Saved Addresses
                      </Dialog.Title>
                      <div>
                        <button
                          onClick={() => openModal('addNewAddress')}
                          type='button'
                          className='text-sm py-[0.15rem] px-2 rounded-md text-white bg-gray-500'
                        >
                          Add New Address
                        </button>
                      </div>
                    </div>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                        {/* If we have addresses, then display them
                              if not, then display something like "no saved addresses" and "add new address" */}
                        {session?.user?.addresses?.length > 0 ? <div>1 </div> : <div>No addresses saved.</div>}
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
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
            {children}
          </Dialog>
        </Transition>
      </>
    )
  }
  return (
    <Tab.Panel>
      <div className='flex flex-col items-center flex-1 pt-20'>
        <section className='mb-8'>
          <div>
            <Image width='150' height='150' className='rounded-full' src={session?.user?.image} alt='Profile picture' />
          </div>
          <p className='mt-4'>{session?.user?.name}</p>
          <p className='mt-2'>{session?.user?.email}</p>
        </section>
        <section className='flex'>
          <button type='button' className='bg-primary-100 py-4 px-4 text-white rounded-sm' onClick={() => openModal('viewAddresses')}>
            View Saved Addresses
          </button>
          <AddressesModal>
            <NestedModal />
          </AddressesModal>
        </section>
      </div>
    </Tab.Panel>
  )
}
