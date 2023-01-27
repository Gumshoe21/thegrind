import Image from 'next/image'
import CheckoutForm from '@checkout/CheckoutForm/CheckoutForm'
const FormHeader = ({ children }) => {
  return <header className='font-bold text-md'>{children}</header>
}
const Checkout = () => {
  return (
    <main className='max-w-2xl lg:max-w-7xl mx-auto px-8'>
      {/* div - main grid with 2 columns*/}
      <div className='lg:grid lg:grid-cols-2 gap-x-20'>
        {/* LEFT PART - FORM */}
        <CheckoutForm />
        <div>
          <h2 className='text-md font-bold'>Order Summary</h2>
          <div>
            <ul className='divide-y divide-gray-300'>
              <SummaryItem />
              <SummaryItem />
              <SummaryItem />
            </ul>
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

const SummaryItem = ({ children }) => {
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
                Basic Tee
              </a>
            </h4>
            <p className='mt-1 text-sm text-gray-500'>Black</p>
            <p className='mt-1 text-sm text-gray-500'>Large</p>
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
          <div>$24.00</div>
          <div>
            <select>
              <option value='1'>1</option>
              <option value='1'>1</option>
              <option value='1'>1</option>
              <option value='1'>1</option>
              <option value='1'>1</option>
              <option value='1'>1</option>
              <option value='1'>1</option>
              <option value='1'>1</option>
            </select>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Checkout
