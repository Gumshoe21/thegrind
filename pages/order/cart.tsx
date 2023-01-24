import Image from 'next/image'
import { Inter } from '@next/font/google'
import { XMarkIcon } from '@heroicons/react/24/outline'

const inter = Inter()

const SummaryItem = ({ children }) => {
  return <li className='flex justify-between gap-8'>{children}</li>
}

const CartItem = () => {
  return (
    <>
      {/* Container for everything below header */}
      <section className='lg:col-span-7 lg:grid grid-cols-7 flex space-between justify-between border-t-[1px] border-t-gray-300 pt-4'>
        <div className='lg:col-span-2'>
          <Image src='/img/products/p1.jpg' height='150' width='150' alt='Chocolate Chip Cookies' />
        </div>
        <div className='lg:col-span-3 lg:-col-start-3 flex flex-col justify-between px-4 py-2'>
          <div className={`flex flex-col space-y-1 ${inter.className}`}>
            <span>Chocolate Chip Cookies</span>
            <span>One Dozen</span>
            <span className='font-bold'>$14</span>
          </div>
          <div>In Stock</div>
        </div>
        <div className='lg:grid-start-6 grid-span-1 '>
          <select className='rounded-lg'>
            <option value='1'>1</option>
          </select>
        </div>
        <div className='flex flex-row justify-end'>
          <span>
            <XMarkIcon className='h-6 w-6 '></XMarkIcon>
          </span>
        </div>
      </section>
    </>
  )
}

const Cart = () => {
  {
    /* Cols 1 - 2: Thumbnail/Image thing 
      Cols 3 - 4: Item descrip/price/in stock 
      Col 5: Quantity picker
      Col 7: X (remove item button)
  */
  }

  return (
    <main className='flex flex-col justify-stretch align-stretch max-w-2xl lg:max-w-7xl h-screen mx-auto px-8 lg:px-8'>
      <header className='flex flex-col items-start text-4xl'>Shopping Cart</header>

      <div className='grid lg:grid-cols-12 mt-20 gap-8'>
        <CartItem />
        <CartItem />
        <CartItem />
        <section className='lg:col-span-5 flex flex-col justify-center lg:row-start-1 lg:col-start-8 '>
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
          <button className='border b-2 border-primary-700 py-4 px-6 bg-primary-700 text-white mt-10 rounded-md'>Checkout</button>
        </section>
      </div>
    </main>
  )
}

export default Cart
