import { Fragment, useState, useCallback, useEffect, useRef } from 'react'
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

  /*
  for (let i = 0; i < props.categories.length; i++) {
    initialFilterStates[props.categories[i]] = false
  }
*/
  const [filterStates, setFilterStates] = useState([])
  const router = useRouter()
  // let [chosenFilters, setChosenFilters] = useState([])

  function onChange(e) {
    /*
    console.log(e.target.checked)
    if (e.target.checked === true) {
      setFilterStates([...filterStates, e.target.name])

      //  setChosenFilters((chosenFilters) => [...chosenFilters, e.target.name])
      //  setChosenFilters((chosenFilters) => [...chosenFilters, e.target.name])
    } else if (e.target.checked === false) {
      // setChosenFilters((chosenFilters) => chosenFilters.filter((c) => c !== e.target.name))
      setFilterStates((prev) => prev.filter((c) => c !== e.target.name))
    }

    console.log(filterStates)
    //setFilterStates({ ...filterStates, [e.target.name]: e.target.checked })

    const params = filterStates.join(',')
    console.log(filterStates)
*/

    //    const params = filterStates.join(',')

    let realSlug = router.query.slug[1].split('=')[1].split(',')
    console.log(realSlug)
    let arlenString = realSlug.join(',')

    if (e.target.checked && !arlenString.split(',').includes(e.target.name)) {
      arlenString += arlenString.length > 0 ? `,${e.target.name}` : `${e.target.name}`
    } else {
      arlenString = arlenString
        .split(',')
        .filter((f) => f !== e.target.name)
        .join(',')
    }

    router.push(`/order/categories/chosen&=${arlenString}`)
    //    props.onChange(chosenFilters)
  }

  return (
    <div className='hidden lg:block'>
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
                  {props.categories.map((c, i) => {
                    return (
                      <div className='flex items-center' key={i}>
                        <input
                          id={`filter-${c}`}
                          name={`${c}`}
                          onClick={(e) => onChange(e)}
                          type='checkbox'
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
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default ProductFilters
