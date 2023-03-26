import Image from 'next/image'
import CheckoutForm from '@checkout/CheckoutForm/CheckoutForm'
import { useSession } from 'next-auth/react'
import Cart from '@models/cartModel'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@pages/api/auth/[...nextauth]'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useRef } from 'react'

interface IFormHeader {
  children: JSX.Element
}
const FormHeader = (props: IFormHeader) => {
  return <header className='font-bold text-md'>{props.children}</header>
}
const CheckoutSummaryItem = ({ children }) => {
  return <li className='flex justify-between gap-8'>{children}</li>
}

const Checkout = ({ cart }) => {
  const router = useRouter()
  const { data: session } = useSession()

  const formRef: React.RefObject<HTMLFormElement> = useRef(null)
  async function handleClick(e) {
    e.preventDefault()
    if (formRef.current) {
      formRef.current.requestSubmit()
    }

    //router.push('/orders/confirmation')
  }
  return (
    <main className='max-w-2xl lg:max-w-7xl mx-auto px-8'>
      {/* div - main grid with 2 columns*/}
      <div className='lg:grid lg:grid-cols-2 gap-x-20'>
        {/* LEFT PART - FORM */}
        <CheckoutForm formRef={formRef} />
        <div className='mt-12 sm:mt-0'>
          <h2 className='text-md font-bold'>Order Summary</h2>
          <div>
            <ul className='divide-y divide-gray-300'>
              {cart?.items?.map((i) => (
                <SummaryItem name={i.name} variant={i.variant} totalPrice={i.totalPrice} quantity={i.quantity} />
              ))}
            </ul>
          </div>
          <div className='bg-gray-100 flex flex-col justify-center py-8 px-6 rounded-lg'>
            <header className='font-bold text-lg'>Order Summary</header>
            <ul className='mt-5'>
              <CheckoutSummaryItem>
                <span>Subtotal</span>
                <span>${cart.totalPrice}</span>
              </CheckoutSummaryItem>
              <CheckoutSummaryItem>
                <span>Shipping Estimate</span>
                <span>$5.00</span>
              </CheckoutSummaryItem>
              <CheckoutSummaryItem>
                <span>Tax Estimate</span>
                <span>$8.32</span>
              </CheckoutSummaryItem>
              <CheckoutSummaryItem>
                <span>Estimated Total</span>
                <span>${+cart.totalPrice + 5}</span>
              </CheckoutSummaryItem>
            </ul>
            <button onClick={handleClick} className='border b-2 border-primary-700 py-4 px-6 bg-primary-700 text-white mt-10 rounded-md'>
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
{
  /* Order Summary Section */
}
{
  /*
          Try to use the flex shorthand
          Remember max, min and ideal size when doing so
          Remember that the content of an element can impact how these values work together, too.

      flex-1 = 1 1 0%
      flex: 0 1 auto;  Default flex value 

      flex-shrink: 0 = don't shrink EVER
      flex-shrink: 1 = shrink to the same size as the other elements

*/
}

const SummaryItem = (props) => {
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
    <li className='flex py-6 '>
      {/* flex: 0 0 auto - to prevent the image from shrinking at any screen size */}
      <div className='flex-shrink-0'>
        <Image src='/img/products/p2.jpg' height='100' width='100' alt='product image' />
      </div>
      {/* flex: 1 1 0%*/}
      <div className='flex flex-1 flex-col ml-4'>
        <div className='flex'>
          <div className='min-w-0 flex-1'>
            <h4 className='text-sm'>
              <a href='#' className='font-medium text-gray-700 hover:text-gray-800'>
                {props.name}
              </a>
            </h4>
            <p className='mt-1 text-sm text-gray-500'>{props.variant}</p>
          </div>

          <div className='ml-4 flow-root flex-shrink-0'>
            <button type='button' className='-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Remove</span>
              <svg className='h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                <path
                  fill-rule='evenodd'
                  d='M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z'
                  clip-rule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='flex flex-1 justify-between items-end'>
          <div>{props.totalPrice}</div>
          <div>
            <select className='rounded-lg' onChange={(e) => onQuantitySelect(e)}>
              {(() => {
                let selectLimit = props.quantity < 10 ? 10 : props.quantity
                let arr: JSX.Element[] = []
                for (let i = 1; i <= selectLimit; i++) {
                  arr.push(
                    <option selected={props.quantity === i} value={i}>
                      {i}
                    </option>
                  )
                }
                return arr
              })()}
            </select>
          </div>
        </div>
      </div>
    </li>
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)
  let user_id = session?.user?.id
  if (!session) {
    return {
      props: {},
    }
  }

  let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/carts/getCart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id,
    }),
  })

  let data = await res.json()

  const { cart } = data

  return {
    props: {
      cart,
    },
  }
}

export default Checkout
