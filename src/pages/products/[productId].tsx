import { useState, useEffect } from 'react'
import Image from 'next/image'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Product from '@models/productModel'
import connectDB from '@src/connectDB'
interface IProductDetailPage {
  product: {
    name: string
    imageAlt: string
    imageSrc: string
    _id: string
    variants: {
      name: string
      price: string
    }[]
  }
}
const ProductDetailPage = (props: IProductDetailPage) => {
  const { data: session } = useSession()
  const router = useRouter()
  const { product } = props
  const [variant, setVariant] = useState(product.variants[0].name)
  const [price, setPrice] = useState(product.variants[0].price)
  const [quantity, setQuantity] = useState('1')

  const [productForm, setProductForm] = useState({
    product_id: product._id,
    name: product.name,
    variantName: variant,
    variantPrice: price,
    productQuantity: quantity,
  })

  const { variantName, variantPrice, productQuantity } = productForm
  useEffect(() => {
    setPrice(product.variants[0].price)
  }, [])

  async function onClick(e) {
    setPrice(product.variants.filter((v) => v.name === e.target.name)[0].price)
    setVariant(e.target.name)
    setProductForm({
      ...productForm,
      variantPrice: e.target.value,
      variantName: e.target.name,
    })
  }

  async function onChange(e) {
    setQuantity(e.target.value)
  }

  async function onSubmit(e) {
    e.preventDefault()
    await setProductForm({
      ...productForm,
      variantName: variant,
      variantPrice: price,
      productQuantity: quantity,
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/carts/createCart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productForm),
    })

    router.push('/cart')
  }
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <main className='flex'>
        {/* Content container */}
        <div className='mx-auto lg:grid lg:grid-cols-2 max-w-2xl lg:max-w-7xl gap-x-16 px-8 py-24 '>
          <section className='max-w-lg justify-between items-stretch content-stretch col-start-1 self-end flex flex-col '>
            <nav className='text-md text-gray-500'>Products&nbsp;&nbsp;/&nbsp;&nbsp; Cookies</nav>
            <header className='text-4xl mt-4 font-bold'>{product.name}</header>
            <div className='text-2xl mt-2'>{'$' + price}</div>
            <p className='mt-4 text-md text-gray-500'>Freshly baked in-house and shipped same day!</p>
          </section>
          {/* Product image */}
          <section className='col-start-2 row-span-2 self-center mt-10 flex '>
            <div className='overflow-hidden rounded-lg'>
              <Image src={`/img/products/${product.imageSrc}`} width='440' height='640' alt={product.imageAlt} />
            </div>
          </section>
          {/* Options/add to cart section */}
          <section className='flex flex-col col-start-1 row-start-2 self-start max-w-lg mt-10 lg:mx-0 '>
            <div className='flex flex-col gap-4'>
              <div className='text-md'>Amount</div>
              <div className='grid grid-cols-2   items-center justify-items-center gap-2'>
                {product.variants.map((v) => (
                  <label className={`${variant === v.name ? 'ring-2 ring-indigo-500' : 'ring-2 ring-gray-300 cursor-pointer'} px-24 py-4 rounded-md`}>
                    <input type='radio' name={v.name} value={v.price} className='sr-only' onClick={(e) => onClick(e)} />
                    <span>{v.name}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className='grid grid-cols-12 mt-10'>
              <select className='col-span-2 row-start-1 text-sm' onChange={(e) => onChange(e)}>
                <option selected value='1'>
                  1
                </option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>
              <button type='submit' className='col-start-4 col-span-9 row-start-1 text-white  border b-2  p-4 rounded-md bg-primary-600 hover:bg-primary-700'>
                Add to Cart
              </button>
            </div>
          </section>
        </div>
      </main>
    </form>
  )
}

export async function getServerSideProps(context) {
  const productIdString = context?.params?.productId as string
  const productId = productIdString.split('p')[1]
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/getProduct?productId=${productId}`, {
    headers: {
      Accept: 'application/json',
    },
  })

  const data = await res.json()
  let { product } = data
  return {
    props: {
      product,
    },
  }
}
export default ProductDetailPage
