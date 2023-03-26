import React from 'react'
import { Poppins } from '@next/font/google'
import { childrenProp } from '@types'

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], variable: '--poppins-font' })

import Image from 'next/image'

interface IOrderItem {
  name: string
  quantity: number
  price: number
  total: number
}
function OrderItem() {
  return (
    <div className='flex py-10 space-x-6'>
      {/* image*/}
      <div className='flex-shrink-0 overflow-none'>
        <Image className='rounded-md overflow-none' src='/img/products/p1.jpg' height='100' width='100' alt='Chocolate Chip Cookies' />{' '}
      </div>
      <div className='flex flex-col flex-auto'>
        <div>
          <h1 className={`${poppins.variable} italic text-lg font-bold`}>Chocolate Chip Cookies</h1>
          <p className='mt-2'>One dozen chocolate chip cookies so you can feed Fat Yoshi for 5 minutes.</p>
        </div>
        <div className='flex items-end flex-[1_1_0%] gap-4'>
          {/* flex: 1 1 0% 
                  flex-grow: 1; all elements will take an equal portion of the `.parent` element, but only if the lengths of the contents are the same.
                  flex-shrink: 1;  means "take up the same amount of space at all times 
                  flex-basis: 0%; 0% is saying that the ideal size of our element is defined by its content. 
                */}
          <div className='sm:space-x-2'>
            <span>Quantity</span>&nbsp;
            <span className='font-bold'>1</span>
          </div>
          |
          <div className='sm:space-x-2'>
            <span>Price</span>&nbsp;
            <span className='font-bold'>$14.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface IDescriptionList {
  children: childrenProp
  className?: string
}

function DescriptionList(props: IDescriptionList) {
  return <dl className='grid grid-cols-2 py-10 gap-x-6'>{props.children}</dl>
}

interface IDescriptionItem {
  children: childrenProp
  title: string
}

function DescriptionItem(props: IDescriptionItem) {
  return (
    <div>
      <dt className={`${poppins.variable} font-bold italic`}>{props.title}</dt>
      <dd>{props.children}</dd>
    </div>
  )
}

export default function OrderConfirmation(props) {
  return (
    <main className='px-4 pt-16'>
      <div className='mx-auto max-w-3xl pb-8'>
        <section>
          <h1 className={`text-4xl font-extrabold ${poppins.variable}`}>Order Confirmation</h1>
          {/* Item breakdown */}
          <div className='divide-y divide-gray-300'>
            <OrderItem />
            <OrderItem />
          </div>
          {/* Order details */}

          <div className='bg-blue'>
            <DescriptionList>
              <DescriptionItem title='Shipping Info'>
                <address>
                  <span>
                    <span className='block'>{props.order.shippingAddress.firstName}&nbsp;{props.order.shippingAddress.lastName}</span>
                    <span className='block'>7363 Cynthia Pass</span>
                    <span className='block'>Toronto, ON N3Y 4H8</span>
                  </span>
                </address>
              </DescriptionItem>
              <DescriptionItem title='Billing Address'>
                <address>
                  <span>
                    <span className='block'>Kristin Watson</span>
                    <span className='block'>7363 Cynthia Pass</span>
                    <span className='block'>Toronto, ON N3Y 4H8</span>
                  </span>
                </address>
              </DescriptionItem>
            </DescriptionList>

            <DescriptionList className='grid grid-cols-2 py-10 gap-x-6'>
              <div>
                <dt>Payment Method</dt>
                <dd>
                  <p>Apply Pay</p>
                  <p>Visa</p>
                  <div>
                    <span className='font-bold font-lg'>&#183;&#183;&#183;&#183;</span>1545
                  </div>
                </dd>
              </div>
              <div>
                <dt>Shipping Method</dt>
                <dd>
                  <p>FedEx</p>
                  <p>5-7 Business Days.</p>
                </dd>
              </div>
            </DescriptionList>
            <dl className='px-4 py-8 rounded-md space-y-2 bg-gray-100'>
              <SummaryItem title='Subtotal' description='$36.00' />
              <SummaryItem title='Shipping' description='$36.00' />
              <SummaryItem title='Total' description='$41.00' />
            </dl>
          </div>
        </section>
      </div>
    </main>
  )
}

interface ISummaryItem {
  title: string
  description: string
}
function SummaryItem({ title, description }: ISummaryItem) {
  return (
    <div className='flex justify-between'>
      <dt className='font-bold'>{title}</dt>
      <dd>{description}</dd>
    </div>
  )
}
export async function getServerSideProps(context) {
  const orderId = context?.params?.orderId

  let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/getOrder?orderId=${orderId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  const data = await res.json()

  let order = { data }
  return {
    props: {
      order: order.data.order,
    },
  }
}
