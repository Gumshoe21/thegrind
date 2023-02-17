import { authOptions } from '../api/auth/[...nextauth]'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { getServerSession } from 'next-auth/next'

const inter = Inter()

interface ISummaryItem {
  children: React.ReactNode[]
}
const SummaryItem = ({ children }: ISummaryItem) => {
  return <li className='flex justify-between gap-8'>{children}</li>
}

const CartItem = (props) => {
  return (
    <>
      {/* Container for everything below header */}
      <div className='flex flex-row gap-8 border-t-gray-300 border-t-[1px] pt-8 justify-between'>
        <div className='lg:col-span-2'>
          <Image src='/img/products/p1.jpg' height='150' width='150' alt='Chocolate Chip Cookies' className='rounded-lg' />
        </div>
        <div className='lg:col-span-3 lg:-col-start-3 flex flex-col justify-between px-4 py-2'>
          <div className={`flex flex-col space-y-1 ${inter.className}`}>
            <span>{props.name}</span>
            <span>{props.variant}</span>
            <span className='font-bold'>{`$${props.price}`}</span>
          </div>
          <div>In Stock</div>
        </div>
        <div className='lg:grid-start-6 grid-span-1 '>
          <select className='rounded-lg'>
            <option value='1'>1</option>
          </select>
        </div>
        <div className='flex flex-row justify-end ml-2'>
          <span>
            <XMarkIcon className='h-4 w-4 '></XMarkIcon>
          </span>
        </div>
      </div>
    </>
  )
}

interface ICart {}
const Cart = ({ cart }) => {
  console.log(cart)
  return (
    <main className='max-w-2xl lg:max-w-7xl mx-auto px-8 lg:px-8 '>
      {/* Main header */}
      <header className='flex flex-col items-start text-4xl'>Shopping Cart</header>
      <div className='lg:grid lg:grid-cols-12 mt-2 gap-10 '>
        {/* Item List */}
        <section className='col-span-7 space-y-8 pr-4 overflow-y-scroll h-[calc(100vh-150px)]'>
          {cart.items.map((item) => (
            <CartItem name={item.name} variant={item.variant} price={item.price} />
          ))}
        </section>
        {/* Checkout form/button */}
        <section className='lg:col-span-5 col-span-7 flex flex-col lg:row-start-1 lg:col-start-8 '>
          <div className='bg-gray-100 flex flex-col justify-center py-8 px-6 rounded-lg'>
            <header className='font-bold text-lg'>Order Summary</header>
            <ul className='mt-5'>
              <SummaryItem>
                <span>Subtotal</span>
                <span>$99.00</span>
              </SummaryItem>
              <SummaryItem>
                <span>Shipping Estimate</span>
                <span>$5.00</span>
              </SummaryItem>
              <SummaryItem>
                <span>Tax Estimate</span>
                <span>$8.32</span>
              </SummaryItem>
              <SummaryItem>
                <span>Subtotal</span>
                <span>$112.32</span>
              </SummaryItem>
            </ul>
            <button className='border b-2 border-primary-700 py-4 px-6 bg-primary-700 text-white mt-10 rounded-md'>
              <Link href='/checkout'>Checkout</Link>
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)
  console.log(session)

  const res = await fetch('http://localhost:3000/api/carts/getCart')

  let data = await res.json()
  let { cart } = data
  if (!cart) return
  return {
    props: {
      cart,
    },
  }
}
export default Cart
