import { sortOptions } from '@data/order'
import { Menu, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

import { selectMobileFiltersOpen, setMobileFiltersOpen } from '@slices/productSlice'
import { useSelector, useDispatch } from 'react-redux'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const ProductsMenu = () => {
  const mobileFiltersOpen = useSelector(selectMobileFiltersOpen)

  const dispatch = useDispatch()
  return (
    <div className='flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6'>
      <h1 className='text-4xl font-bold tracking-tight text-gray-900'>Psst... the cookies are good.</h1>

      <div className='flex items-center'>
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
              Sort
              <ChevronDownIcon className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500' aria-hidden='true' />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='py-1'>
                {sortOptions.map((option) => (
                  <Menu.Item key={option.name}>
                    {({ active }) => (
                      <a
                        href={option.href}
                        className={classNames(
                          option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        {option.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <button type='button' className='-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7'>
          <span className='sr-only'>View grid</span>
          <Squares2X2Icon className='h-5 w-5' aria-hidden='true' />
        </button>
        <button
          type='button'
          className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'
          onClick={() => dispatch(setMobileFiltersOpen(true))}
        >
          <span className='sr-only'>Filters</span>
          <FunnelIcon className='h-5 w-5' aria-hidden='true' />
        </button>
      </div>
    </div>
  )
}
export default ProductsMenu
