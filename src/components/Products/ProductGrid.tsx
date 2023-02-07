import { Fragment, useState, useCallback, useEffect } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import useBreakpoint from '@utils/use-breakpoint'
import { sortOptions, subCategories } from '@data/order'
import ProductFiltersMobile from '@products/ProductFiltersMobile'

const ProductGrid = ({ products }: { products: {}[] }) => {
  const [filtered, setFiltered] = useState([])
  return (
    <div className='lg:col-span-3'>
      <div className='h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full'>
        {/* /End replace */}
        <div className='bg-white'>
          <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <h2 className='sr-only'>Products</h2>
            <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
              {products.map((product) => (
                <a key={product.id} href={`/order/${product.id}`} className='group animate-[fadeIn_1s_linear] transition-all'>
                  <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                    <Image
                      src={`/img/products/${product.imageSrc}`}
                      alt={product.imageAlt}
                      width='800'
                      height='800'
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
  )
}

export default ProductGrid
