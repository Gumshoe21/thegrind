import { Fragment, useState, useCallback, useEffect } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { sortOptions, subCategories, products } from '@data/order'
import { selectMobileFiltersOpen, setMobileFiltersOpen } from '@slices/productSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { selectCheckboxes, setCheckboxes } from '@slices/productSlice'

const ProductFiltersMobile = (props) => {
  const mobileFiltersOpen = useSelector(selectMobileFiltersOpen)
  const checkboxes = useSelector(selectCheckboxes)

  const dispatch = useDispatch()
  const router = useRouter()

  function onChange(e, router) {
    props.onChange(e, router)
  }

  return (
    <>
      {/* The 'show' prop controls whether the children should be shown or hidden */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as='div' className='relative z-40 lg:hidden' onClose={() => dispatch(setMobileFiltersOpen(false))}>
          {/* Semi-opaque div that covers rest of screen while mobile filters menu is open. */}
          {/* Transition is set as a Fragment to avoid adding nodes to the DOM */}
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          {/* Mobile filters menu div start */}
          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              {/* ml-auto to push menu left 
				w-full to take up the full width determined by max-w-sm */}
              <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl'>
                <div className='flex items-center justify-between px-4'>
                  <h2 className='text-lg font-medium text-gray-900'>Filters</h2>
                  <button
                    type='button'
                    className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
                    onClick={() => dispatch(setMobileFiltersOpen(false))}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                {/* Filters */}
                <form className='mt-4 border-t border-gray-200'>
                  <Disclosure as='div' key={2} className='border-b border-gray-200 px-4 py-6'>
                    {({ open }) => (
                      <>
                        <h3 className='-my-3 flow-root'>
                          <Disclosure.Button className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'>
                            {/* FILTER TYPE NAME */}
                            <span className='font-medium text-gray-900'>Categories</span>
                            <span className='ml-6 flex items-center'>
                              {open ? <MinusIcon className='h-5 w-5' aria-hidden='true' /> : <PlusIcon className='h-5 w-5' aria-hidden='true' />}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className='pt-6'>
                          <div className='space-y-4'>
                            {props.categories.map((c, i) => {
                              return (
                                <div className='flex items-center' key={i}>
                                  <input
                                    id={`filter-${c}`}
                                    name={`${c}`}
                                    onChange={(e) => props.onChange(e, router)}
                                    type='checkbox'
                                    checked={checkboxes[c]}
                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                  />
                                  <label htmlFor={`filter-${c}`} className='ml-3 text-sm text-gray-600'>
                                    {c[0].toUpperCase() + c.slice(1)}
                                  </label>
                                </div>
                              )
                            })}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default ProductFiltersMobile
