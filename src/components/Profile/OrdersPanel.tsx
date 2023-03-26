import Image from 'next/image'
import { Tab } from '@headlessui/react'
import { Poppins } from '@next/font/google'

import { useSession } from 'next-auth/react'

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], variable: '--poppins-font' })

export default function OrdersPanel({ orders }) {

  return (
    <Tab.Panel className='flex flex-col h-full items-center justify-start'>
      {/* Orders Container */}
      <h1 className={` ${poppins.variable} text-3xl font-bold mt-12`}>Order History</h1>
      {/* Order Item */}
      {orders.map((order) => (
        <div className='flex flex-col w-[clamp(300px,80%,800px)] flex-1 rounded-md mx-auto border b-1 border-gray-300 mt-8 py-6 px-8'>
          <header>
            <h2 className='text-2xl font-bold'>Order #{order._id}</h2>
            <h3 className='mt-2'>{order.createdAt}</h3>
          </header>
          <table className='mt-4 divide-y divide-gray-300'>
            <thead>
              <tr>
                <>
                  <Th>Items Purchased</Th>
                  <Th>Quantity</Th>
                  <Th>Price</Th>
                </>
              </tr>
            </thead>

            <tbody className='divide-y divide-gray-300'>
              {order.cartItems.map((cartItem) => (
                <>
                  {/* Items Purchased */}
                  <tr className=''>
                    <td className='flex py-2 pr-8'>
                      <div className='mr-2 flex-shrink-0'>
                        <Image src='/img/products/p2.jpg' height='50' width='50' alt='product image' />
                      </div>
                      <div className='flex flex-col justify-around space-between flex-1'>
                        <div>{cartItem.name}</div>
                        <div>{cartItem.variant}</div>
                      </div>
                    </td>
                    {/* Quantity*/}
                    <td>
                      <div>
                        <span>{cartItem.quantity}</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>{cartItem.price}</span>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </Tab.Panel>
  )
}

export function Th({ children }) {
  return (
    <th className='py-4 pr-2 text-left' scope='col'>
      {children}
    </th>
  )
}

export function Tr() {
  return (
    <>
      {/* Items Purchased */}
      <tr className=''>
        <td className='flex py-2 pr-8'>
          <div className='mr-2 flex-shrink-0'>
            <Image src='/img/products/p2.jpg' height='50' width='50' alt='product image' />
          </div>
          <div className='flex flex-col justify-around space-between flex-1'>
            <div>Chocolate Chip Cookies</div>
            <div>One Dozen</div>
          </div>
        </td>
        {/* Quantity*/}
        <td>
          <div>
            <span>01</span>
          </div>
        </td>
        <td>
          <div>
            <span>$18.00</span>
          </div>
        </td>
      </tr>
    </>
  )
}
