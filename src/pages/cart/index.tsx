import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { authOptions } from './../api/auth/[...nextauth]'
import { getSession } from 'next-auth/react'

import { getServerSession } from 'next-auth/next'
import { useRouter } from 'next/router'
const inter = Inter()

interface ISummaryItem {
  children: React.ReactNode[]
}
const SummaryItem = ({ children }: ISummaryItem) => {
  return <li className='flex justify-between gap-8'>{children}</li>
}

const CartItem = (props) => {
  const router = useRouter()
  async function onQuantitySelect(e) {
    let reqBody = {
      selectedQuantity: e.target.value,
      product: {
        name: props.name,
        variant: props.variant,
        price: props.price,
      },
    }
    // req.body.product.variant
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/carts/updateCart`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reqBody),
    })
    router.reload()
  }
  return (
    <>
      {/* Container for everything below header */}
      <div className='flex xs:flex-row sm:gap-8 border-t-gray-300 border-t-[1px] pt-8 justify-between'>
        <div className='lg:col-span-2 flex-shrink-0'>
          <Image src='/img/products/p1.jpg' height='125' width='125' alt='Chocolate Chip Cookies' className='rounded-lg' />
        </div>
        <div className='lg:col-span-3 lg:-col-start-3 flex flex-col justify-between px-4 py-2'>
          <div className={`flex flex-col space-y-1 ${inter.className}`}>
            <span>{props.name}</span>
            <span>{props.variant}</span>
            <span className='font-bold'>{`$${props.price}`}</span>
          </div>
          <div>In Stock</div>
        </div>

        <div className='lg:grid-start-6 grid-span-1 flex flex-col flex-shrink-0 justify-between py-2'>
          <select defaultValue={props.quantity} className='rounded-lg' onChange={(e) => onQuantitySelect(e)}>
            {(() => {
              let selectLimit = props.quantity <= 10 ? 10 : props.quantity

              let arr: JSX.Element[] = []
              for (let i = 1; i <= selectLimit; i++) {
                arr.push(<option value={i}>{i}</option>)
              }
              return arr
            })()}
          </select>
          <div>
            <span>[null]</span>
          </div>
        </div>
        {/* Delete item button */}
        <div className='flex flex-row justify-end ml-2 py-2'>
          <span>
            <XMarkIcon className='h-4 w-4 '></XMarkIcon>
          </span>
        </div>
      </div>
    </>
  )
}

interface ICart {
  status: string
  items: {
    name: string
    quantity: number
    variant: string
    price: number
    total: number
  }[]
}

const Cart = ({ cart }) => {
  return (
    <main className='max-w-2xl lg:max-w-7xl mx-auto px-8 lg:px-8 '>
      {/* Main header */}
      {cart?.items?.length > 0 && (
        <>
          <header className='flex flex-col items-start text-4xl'>Shopping Cart</header>
          <div className='flex flex-col lg:grid lg:grid-cols-12 mt-2 gap-10 '>
            {/* Item List */}
            <section className='col-span-7 space-y-8 pr-4 sm:px-4 overflow-y-scroll lg:h-[calc(100vh-150px)]'>
              {/* TODO make this into just item={item} and change the CartItem component above to reflect it */}
              {cart?.items?.map((item) => (
                <CartItem name={item.name} variant={item.variant} price={item.price} quantity={item.quantity} itemTotal={item.total} />
              ))}
            </section>
            {/* Checkout form/button */}
            <section className='lg:col-span-5 col-span-7 flex flex-col lg:row-start-1 lg:col-start-8 '>
              <div className='bg-gray-100 flex flex-col justify-center py-8 px-6 rounded-lg'>
                <header className='font-bold text-lg'>Order Summary</header>
                <ul className='mt-5'>
                  <SummaryItem>
                    <span>Subtotal</span>
                    <span>${cart.totalPrice.toFixed(2)}</span>
                  </SummaryItem>
                  <SummaryItem>
                    <span>Shipping Estimate</span>
                    <span>$5.00</span>
                  </SummaryItem>
                  <SummaryItem>
                    <span>Estimated Total</span>
                    <span>${(+cart.totalPrice + 5).toFixed(2)}</span>
                  </SummaryItem>
                </ul>
                <button className='border b-2 border-primary-700 py-4 px-6 bg-primary-700 text-white mt-10 rounded-md'>
                  <Link href='/orders/checkout'>Checkout</Link>
                </button>
              </div>
            </section>
          </div>
        </>
      )}
      {cart.length < 1 && (
        <>
          <section className='flex flex-col items-center justify-center '>
            <h1 className='text-5xl'>Your shopping cart is empty.</h1>
            <h2 className='text-3xl'>Explore some of our products:</h2>
            <div className='grid grid-cols-2 grid-rows-2'>
              <EmptyCartProduct/>
              <EmptyCartProduct/>
              <EmptyCartProduct/>
              <EmptyCartProduct/>
            </div>
          </section>
        </>
      )}
      {/*
          <div>Your cart is empty. What, you don't want cookies? Give me your money, or something.</div>
          <div>
            <Link
              href='/products/categories/chosen&='
              className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600;
'
            >
              Continue shopping.
            </Link>
          </div>
*/}
    </main>
  )
}

function EmptyCartProduct() {
  return <div>Item</div>
}
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/carts/getCart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: session?.user?.id,
    }),
  })
  let data = await res.json()

  let { cart } = data

  if (!cart) {
    return {
      props: {
        cart: [],
      },
    }
  }

  return {
    props: {
      cart,
    },
  }
}
export default Cart
