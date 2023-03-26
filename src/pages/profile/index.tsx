import { Tab } from '@headlessui/react'
import TabButton from '@profile/TabButton'
import OrdersPanel from '@profile/OrdersPanel'
import ProfilePanel from '@profile/ProfilePanel'
import Image from 'next/image'
import Link from 'next/link'
import mongoose from 'mongoose'
import Order from '@models/orderModel'
import Cart from '@models/cartModel'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './../api/auth/[...nextauth]'
import connectDB from '@src/connectDB'

export default function Profile({ orders }) {
  return (
    <Tab.Group vertical>
      <div className='md:flex md:h-[calc(100vh-80px)]'>
        <div className='direc md:fixed z-auto overflow-x-hidden left-0 top-0 w-full md:max-w-xs flex h-full justify-between flex-1 flex-col-reverse md:flex-col border-r border-gray-200 bg-white'>
          <div className='flex flex-col'>
            <div className='flex flex-1 flex-col overflow-y-auto pt-5 pb-4'>
              <nav className='flex-1 flex-row align-end space-y-1 bg-white px-2' aria-label='Sidebar'>
                <Tab.List>
                  <ul className='space-y-2'>
                    <TabButton label={'Settings'} />
                    <TabButton label={'Orders'} />
                  </ul>
                </Tab.List>
              </nav>
            </div>
          </div>
          <div className='mx-auto py-4'>
            <Link href='/'>
              <Image src='/img/logo.png' alt='The Grind Logo' width={150} height={150} />
            </Link>
          </div>
        </div>
        <div className='flex flex-col flex-1 items-center md:ml-[320px] mt-20'>
          <Tab.Panels className='w-full'>
            <ProfilePanel />
            <OrdersPanel orders={orders} />
          </Tab.Panels>
        </div>
      </div>
    </Tab.Group>
  )
}

export async function getServerSideProps(context) {
  connectDB()

  const session = await getServerSession(context.req, context.res, authOptions)

  let user_id = session?.user?.id

  let userOrders = await Order.find({ user: user_id })

  if (!userOrders) {
    return {}
  }

  userOrders = JSON.parse(JSON.stringify(userOrders))
  /*
  for (let order of userOrders) {
    let orderCart = await Cart.findOne({ id: order.cart, status: 'inactive' })
console.log(orderCart)
    orderCart = JSON.parse(JSON.stringify(orderCart))

//    console.log(orderCart)
    if (orderCart) {
      order.cartItems = orderCart.items
    }
  }
*/
  console.log(userOrders)
  const cartPromises = userOrders.map(async (order) => {
    console.log(order.cart)
    let orderCart = await Cart.findOne({ _id: order.cart, status: 'inactive' })

    orderCart = JSON.parse(JSON.stringify(orderCart))
    if (orderCart) {
      order.cartItems = orderCart.items
    }
  })
  await Promise.all(cartPromises)

  return {
    props: {
      orders: userOrders,
    },
  }
}
