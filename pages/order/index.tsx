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
import ProductFilters from '@products/ProductFilters'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function AllProductsPage() {
  const router = useRouter()

  console.log(router.query)
  const { breakpoint, windowSize } = useBreakpoint()
  {
    /** 
	const handleCheckbox = e => {
		setFilters(prevState => {
			return {
				categories: {
					...prevState.categories,
					[e.target.value]: {
						...prevState.categories[e.target.value],
						checked: e.target.checked
					}
				}
			}
		})
		console.log(filters)
		// Find all categories where checked = true, then set filters to those categories.
		for (let f in filters.categories) {
			if (!filters.categories[e.target.value]['checked'] === true) {
				setFiltered(old => [...old, filters.categories[e.target.value]['value']])
			} else {
				setFiltered(prevState => [...prevState.filter(el => el !== filters.categories[e.target.value]['value'])])
			}
		}
	}
*/
  }
  return (
    <div className='bg-white'>
      <div>
        {/* Mobile filters dialog */}
        {/* The 'show' prop controls whether the children should be shown or hidden */}
        <ProductFiltersMobile />

        <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <ProductsMenu />
          <section aria-labelledby='products-heading' className='pt-6 pb-24'>
            <h2 id='products-heading' className='sr-only'>
              Products
            </h2>
            {/*********************************************************************************/}
            <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
              {/* Filters */}
              <ProductFilters />
              <ProductGrid />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default AllProductsPage
