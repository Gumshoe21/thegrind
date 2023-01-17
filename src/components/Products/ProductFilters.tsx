import { Fragment, useState, useCallback, useEffect } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import useBreakpoint from '@utils/use-breakpoint'
import { sortOptions, subCategories, products } from '@data/order'
import ProductFiltersMobile from '@products/ProductFiltersMobile'
import ProductGrid from '@products/ProductGrid'
import ProductsMenu from '@products/ProductsMenu'

const ProductFilters = (props) => {
  const { breakpoint, windowSize } = useBreakpoint()

  return (
    <form className='hidden lg:block'>
      <Disclosure as='div' className='border-b border-gray-200 py-6'>
        {({ open, close }) => (
          <>
            {open && windowSize.width < 960 && close()}
            <h3 className='-my-3 flow-root'>
              <Disclosure.Button className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'>
                {/* FILTER TYPE NAME */}
                <span className='font-medium text-gray-900'>Categories</span>
                <span className='ml-6 flex items-center'>
                  {open ? <MinusIcon className='h-5 w-5' aria-hidden='true' /> : <PlusIcon className='h-5 w-5' aria-hidden='true' />}
                </span>
              </Disclosure.Button>
            </h3>
            <Transition
              enter='transition duration-100 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
            >
              <Disclosure.Panel className='pt-6'>
                <div className='space-y-4'>
                  {props.categories.map((c) => (
                    <div className='flex items-center'>
                      <>
                        <input
                          id={`filter-${c}`}
                          name={`${c}`}
                          defaultValue={c}
                          onChange={(e) => console.log(c)}
                          type='checkbox'
                          defaultChecked={true}
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                        />
                        <label htmlFor={`filter-${c}`} className='ml-3 text-sm text-gray-600'>
                          {c[0].toUpperCase() + c.slice(1)}
                        </label>
                      </>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </form>
  )
}

export default ProductFilters
