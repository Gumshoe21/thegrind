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

function AllProductsPage(props) {
  const router = useRouter()

  const { products, categories } = props

  const { breakpoint, windowSize } = useBreakpoint()

  let queryUrl = ''
  let chosenFilters: string[] = []

  const handleFilters = (checkboxes) => {
    // console.log(router.query.slug)

    for (let checkbox in checkboxes) {
      if (checkboxes[checkbox] && !chosenFilters.includes(checkbox)) {
        chosenFilters.push(checkbox)
      } else if (!checkboxes[checkbox]) {
        chosenFilters = chosenFilters.filter((c) => c !== checkbox) 
      }
    }

    console.log(chosenFilters)
    const params = chosenFilters.join(',')
    router.push(`/order/categories/chosen&=${params}`)
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
              <ProductFilters categories={props.categories} onChange={handleFilters} />
              <ProductGrid products={products} />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://thegrind-3097f-default-rtdb.firebaseio.com/products.json')

  const data = await res.json()

  const products = []

  for (const key in data) {
    products.push({
      id: key,
      ...data[key],
    })
  }

  const categories: string[] = []

  for (const product of products) {
    if (!categories.includes(product.category)) {
      categories.push(product.category)
    }
  }

  return {
    props: {
      products,
      categories,
    },
    revalidate: 60,
  }
}
export default AllProductsPage
