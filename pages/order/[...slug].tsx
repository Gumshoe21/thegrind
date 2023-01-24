import ProductFiltersMobile from '@products/ProductFiltersMobile'
import { useState } from 'react'
import { useRouter } from 'next/router'
import ProductGrid from '@products/ProductGrid'
import ProductsMenu from '@products/ProductsMenu'
import ProductFilters from '@products/ProductFilters'
import { setCheckboxes } from '@slices/productSlice'
import { useDispatch } from 'react-redux'
const FilteredProducts = (props) => {
  //  const router = useRouter()

  const dispatch = useDispatch()
  // to-do
  if (props.hasError) {
    return <div>Error</div>
  }

  if (!props.products || props.products.length === 0) {
    return <div>Error.</div>
  }

  function onChange(e, router) {
    dispatch(setCheckboxes(e.target.name))
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
    <div className='bg-white'>
      <div>
        {/* Mobile filters dialog */}
        <ProductFiltersMobile categories={props.categories} onChange={onChange} />
        <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <ProductsMenu />
          <section aria-labelledby='products-heading' className='pt-6 pb-24'>
            <h2 id='products-heading' className='sr-only'>
              Products
            </h2>
            <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
              {/* Filters */}
              <ProductFilters categories={props.categories} onChange={onChange} />
              <ProductGrid products={props.products}  />
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
