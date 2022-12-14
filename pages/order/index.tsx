import { Fragment, useState, useCallback, useEffect } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import useBreakpoint from '@utils/use-breakpoint.ts'
import { sortOptions, subCategories, products, filterOptions } from '@data/order.ts'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Order() {
  const { breakpoint, windowSize } = useBreakpoint()
  const [filters, setFilters] = useState(filterOptions)
  const [filtered, setFiltered] = useState([])

  const handleCheckbox = (e) => {
    setFilters((prevState) => {
      return {
        categories: {
          ...prevState.categories,
          [e.target.value]: {
            ...prevState.categories[e.target.value],
            checked: e.target.checked,
          },
        },
      }
    })
    for (let f in filters.categories) {
      if (!filters.categories[e.target.value]['checked'] === true) {
        setFiltered((old) => [...old, filters.categories[e.target.value]['value']])
      } else {
        setFiltered((prevState) => [...prevState.filter((el) => el !== filters.categories[e.target.value]['value'])])
      }
    }
  }

  console.log(filtered)
  // find all categories that have 'true' checked value

  // create object from categories array that includes only products where the categories are true/checked.
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className='bg-white'>
      <div>
        {/* Mobile filters dialog */}
        {/* The 'show' prop controls whether the children should be shown or hidden */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as='div' className='relative z-40 lg:hidden' onClose={setMobileFiltersOpen}>
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
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className='sr-only'>Close menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className='mt-4 border-t border-gray-200'>
                    {Object.entries(filters).map((section) => (
                      <Disclosure as='div' key={section.id} className='border-b border-gray-200 px-4 py-6'>
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
                                {Object.values(section[1]).map((option, optionIdx) => (
                                  <div key={option.value} className='flex items-center'>
                                    {/* FILTER INPUT */}
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      onChange={(e) => handleCheckbox(e)}
                                      type='checkbox'
                                      defaultChecked={option.checked}
                                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label htmlFor={`filter-${section.id}-${optionIdx}`} className='ml-3 text-sm text-gray-600'>
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
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
              <button type='button' className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden' onClick={() => setMobileFiltersOpen(true)}>
                <span className='sr-only'>Filters</span>
                <FunnelIcon className='h-5 w-5' aria-hidden='true' />
              </button>
            </div>
          </div>

          <section aria-labelledby='products-heading' className='pt-6 pb-24'>
            <h2 id='products-heading' className='sr-only'>
              Products
            </h2>
            {/*********************************************************************************/}
            <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
              {/* Filters */}
              <form className='hidden lg:block'>
                {Object.entries(filters).map((section) => (
                  <Disclosure as='div' key={section.id} className='border-b border-gray-200 py-6'>
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
                              {Object.values(section[1]).map((option, optionIdx) => (
                                <div key={option.value} className='flex items-center'>
                                  {/* FILTER INPUT */}
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    onChange={(e) => handleCheckbox(e)}
                                    type='checkbox'
                                    defaultChecked={option.checked}
                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                  />
                                  <label htmlFor={`filter-${section.id}-${optionIdx}`} className='ml-3 text-sm text-gray-600'>
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className='lg:col-span-3'>
                <div className='h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full'>
                  {/* /End replace */}
                  <div className='bg-white'>
                    <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
                      <h2 className='sr-only'>Products</h2>
                      <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                        {filtered.length === 0 &&
                          products.map((product) => (
                            <a key={product.id} href={product.href} className='group animate-[fadeIn_1s_linear] transition-all'>
                              <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                                <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className='h-full w-full object-cover object-center group-hover:opacity-75'
                                />
                              </div>
                              <h3 className='mt-4 text-sm text-gray-700'>{product.name}</h3>
                              <p className='mt-1 text-lg font-medium text-gray-900'>{product.price}</p>
                            </a>
                          ))}
                        {filtered.length > 0 &&
                          products
                            .filter((f) => filtered.includes(f.category))
                            .map((product) => (
                              <a key={product.id} href={product.href} className='group bg-blue-200 animate-[fadeIn_1s_linear] transition-all'>
                                <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className='h-full w-full object-cover object-center group-hover:opacity-75'
                                  />
                                </div>
                                <h3 className='mt-4 text-sm text-gray-700'>{product.name}</h3>
                                <p className='mt-1 text-lg font-medium text-gray-900'>{product.price}</p>
                              </a>
                            ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Order
