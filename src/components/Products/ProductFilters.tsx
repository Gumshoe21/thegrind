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
  const router = useRouter()

  const [filterStates, setFilterStates] = useState([])

  let initialCheckboxState = {}

  useEffect(() => {
    for (const c in props.categories) {
      if (router.query.slug[1].split('=')[1].split(',').includes(props.categories[c])) {
        initialCheckboxState[props.categories[c]] = true
      } else {
        initialCheckboxState[props.categories[c]] = false
      }
    }
  }, [router.query.slug])

  const [checkboxState, setCheckboxState] = useState(initialCheckboxState)

  console.log(checkboxState)
  function onChange(e) {
    setCheckboxState({
      ...checkboxState,
      [e.target.name]: e.target.checked,
    })

    console.log(checkboxState)
    // E.g. ['pies', 'cookies']
    const categoriesArr = router.query.slug[1].split('=')[1].split(',')
    // E.g. 'pies,cookies'
    let categoriesStr = categoriesArr.join(',')
    // Append category onto 'chosen' filter if the category is checked and the current list of categories doesn't include the category we are currently checking for
    // (i.e., add the category only if it hasn't already been added.).
    if (e.target.checked && !categoriesArr.includes(e.target.name)) {
      categoriesStr += categoriesStr.length > 0 ? `,${e.target.name}` : `${e.target.name}`
    } else {
      // If the above condition isn't met, return a comma-separated string of categories that excludes the category we are currently checking for.
      // Effectively fulfills the purpose of unchecking a category.
      categoriesStr = categoriesArr.filter((f) => f !== e.target.name).join(',')
    }
    // Update the chosen param with the newly-filtered categories.
    router.push(`/order/categories/chosen&=${categoriesStr}`)
  }

  return (
    <div className='hidden lg:block'>
      <Disclosure as='div' className='border-b border-gray-200 py-6'>
        {({ open, close }) => (
          <>
            {/**/}
            {/* open && windowSize.width < 960 && close()*/}
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
                          onChange={(e) => onChange(e)}
                          type='checkbox'
                          checked={checkboxState[c]}
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
