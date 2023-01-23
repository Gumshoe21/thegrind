import ProductFiltersMobile from '@products/ProductFiltersMobile'
import { useState } from 'react'
import { useRouter } from 'next/router'
import ProductGrid from '@products/ProductGrid'
import ProductsMenu from '@products/ProductsMenu'
import ProductFilters from '@products/ProductFilters'

const FilteredProducts = (props) => {
  const router = useRouter()

  // to-do
  if (props.hasError) {
    return <div>Error</div>
  }

  if (!props.products || props.products.length === 0) {
    return <div>Error.</div>
  }

  return (
    <div className='bg-white'>
      <div>
        {/* Mobile filters dialog */}
        <ProductFiltersMobile />
        <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <ProductsMenu />
          <section aria-labelledby='products-heading' className='pt-6 pb-24'>
            <h2 id='products-heading' className='sr-only'>
              Products
            </h2>
            <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
              {/* Filters */}
              <ProductFilters categories={props.categories} />
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

  let categoriesPath = params.slug[1] || null
  let filterData = categoriesPath?.split('=')[1]?.split(',')

  const res = await fetch('https://thegrind-3097f-default-rtdb.firebaseio.com/products.json')
  const data = await res.json()
console.log(data)
  if (categoriesPath === undefined || filterData === undefined) {
    return {
      notFound: true,
    }
  }

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

  // If
  products = filterData.join('') === '' ? products : products.filter((p) => filterData.includes(p.category))

  return {
    props: {
      products,
      categories,
    },
  }
}

export default FilteredProducts
