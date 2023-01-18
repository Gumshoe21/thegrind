import ProductFiltersMobile from '@products/ProductFiltersMobile'
import { useState } from 'react'
import { useRouter } from 'next/router'
import ProductGrid from '@products/ProductGrid'
import ProductsMenu from '@products/ProductsMenu'
import ProductFilters from '@products/ProductFilters'

const FilteredProducts = (props) => {
  const router = useRouter()

  const handleFilters = (chosenFilters) => {
    router.push(`/order/categories/chosen&=${chosenFilters.join(',')}`)
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
              <ProductGrid products={props.products} />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { params } = context

  let filterData = context.query.slug[1].split('=')[1].split(',')
  console.log(filterData.join('') === '')
  const res = await fetch('https://thegrind-3097f-default-rtdb.firebaseio.com/products.json')

  const data = await res.json()

  let products = []

  for (const key in data) {
    products.push({
      id: key,
      ...data[key],
    })
  }

  let categories = []

  for (const product of products) {
    if (!categories.includes(product.category)) {
      categories.push(product.category)
    }
  }

  if (filterData.join('') === '') {
    products = products
  } else {
    products = products.filter((p) => filterData.includes(p.category))
  }
  return {
    props: {
      products,
      categories,
    },
  }
}

export default FilteredProducts
