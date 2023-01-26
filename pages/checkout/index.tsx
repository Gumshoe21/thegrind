import Image from 'next/image'
const FormHeader = ({ children }) => {
  return <header className='font-bold text-md'>{children}</header>
}
const Checkout = () => {
  return (
    <main className='b-2 border border-black max-w-2xl lg:max-w-7xl mx-auto px-8'>
      {/* div - main grid with 2 columns*/}
      <div className='lg:grid lg:grid-cols-2 gap-8'>
        {/* LEFT PART - FORM */}
        <div>
          {/* sections wrapper */}
          <div>
            {/* Contact Info Section */}
            <div>
              <h2 className='font-bold text-md'>Contact Information</h2>
              <label for='email'>Email</label>
              <div>
                <input className='block w-full' type='text' id='email' name='email' required />
              </div>
            </div>

            {/* Shipping Info Section */}
            <div>
              <h2 className='font-bold text-md'>Shipping Information</h2>
              {/* section grid wrapper */}
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div>
                  <label for='firstName'>First Name</label>
                  <div>
                    <input className='block w-full' type='text' id='firstName' name='firstName' required />
                  </div>
                </div>
                <div>
                  <label for='lastName'>Last Name</label>
                  <div>
                    <input className='block w-full' type='text' id='lastName' name='lastName' required />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label for='company'>Company</label>
                  <div>
                    <input className='block w-full' type='text' id='company' name='company' />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label for='address'>Address</label>
                  <div>
                    <input className='block w-full' type='text' id='address' name='address' />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label for='address'>Apartment, suite, etc.</label>
                  <div>
                    <input className='block w-full' type='text' id='address' name='address' />
                  </div>
                </div>
                <div>
                  <label for='firstName'>City</label>
                  <div>
                    <input className='block w-full' type='text' id='firstName' name='firstName' required />
                  </div>
                </div>
                <div>
                  <label for='lastName'>Country</label>
                  <div>
                    <select className='block w-full' id='country' name='country' required>
                      <option id='1'>United States</option>
                      <option id='2'>Canada</option>
                      <option id='3'>Brazil</option>
                      <option id='4'>Mexico</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label for='firstName'>State&nbsp;/&nbsp;Province</label>
                  <div>
                    <input className='block w-full' type='text' id='firstName' name='firstName' required />
                  </div>
                </div>
                <div>
                  <label for='lastName'>Postal Code</label>
                  <div>
                    <input className='block w-full' type='text' id='lastName' name='lastName' required />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label for='lastName'>Postal Code</label>
                  <div>
                    <input className='block w-full' type='text' id='lastName' name='lastName' required />
                  </div>
                </div>
              </div>
            </div>
            {/* Delivery Method Section */}
            <div>
              <h2 className='font-bold text-md'>Delivery Method</h2>
              {/* section grid wrapper */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4'>
                <label className='flex relative cursor-pointer ring-2 ring-indigo-500 rounded-lg p-4'>
                  <input type='radio' name='delivery-method' value='value' className='sr-only' />
                  <span className='flex flex-1'>
                    <span class='flex flex-col'>
                      <span id='delivery-method-0-label' class='block text-sm font-medium text-gray-900'>
                        Standard
                      </span>
                      <span id='delivery-method-0-description-0' class='mt-1 flex items-center text-sm text-gray-500'>
                        4–10 business days
                      </span>
                      <span id='delivery-method-0-description-1' class='mt-6 text-sm font-medium text-gray-900'>
                        $5.00
                      </span>
                    </span>
                  </span>
                  <svg class='h-5 w-5 text-indigo-600' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                    <path
                      fill-rule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </label>
                <label className='flex relative cursor-pointer ring-2 ring-indigo-500 rounded-lg p-4'>
                  <input type='radio' name='delivery-method' value='value' className='sr-only' />
                  <span className='flex flex-1'>
                    <span class='flex flex-col'>
                      <span id='delivery-method-0-label' class='block text-sm font-medium text-gray-900'>
                        Standard
                      </span>
                      <span id='delivery-method-0-description-0' class='mt-1 flex items-center text-sm text-gray-500'>
                        4–10 business days
                      </span>
                      <span id='delivery-method-0-description-1' class='mt-6 text-sm font-medium text-gray-900'>
                        $5.00
                      </span>
                    </span>
                  </span>
                  <svg class='h-5 w-5 text-indigo-600' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                    <path
                      fill-rule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </label>
              </div>
            </div>
            {/* Payment Method Section */}
            <div>
              <h2 className='font-bold text-md'>Payment Method</h2>
              <fieldset className='mt-4'>
                <legend className='sr-only'>Payment type</legend>
                <div className='space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10 py-4 px-2 justify-between'>
                  <div className='flex items-center'>
                    <input
                      id='credit-card'
                      name='payment-type'
                      type='radio'
                      checked
                      className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label for='credit-card' className='ml-3 block text-sm font-medium text-gray-700'>
                      Credit card
                    </label>
                  </div>

                  <div className='flex items-center'>
                    <input id='paypal' name='payment-type' type='radio' className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                    <label for='paypal' className='ml-3 block text-sm font-medium text-gray-700'>
                      PayPal
                    </label>
                  </div>

                  <div class='flex items-center'>
                    <input id='etransfer' name='payment-type' type='radio' className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                    <label for='etransfer' className='ml-3 block text-sm font-medium text-gray-700'>
                      eTransfer
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className='grid grid-cols-4'>
                <div className='col-span-4'>
                  <label>Credit Card Number</label>
                  <div>
                    <input className='block w-full' type='text' name='credit-card' id='credit-card' />
                  </div>
                </div>
                <div className='col-span-4'>
                  <label>Name on Card</label>
                  <div>
                    <input className='block w-full' type='text' name='name-on-card' id='name-on-card' />
                  </div>
                </div>
                <div className='col-span-3'>
                  <label>Expiration Date (MM/YY)</label>
                  <div>
                    <input className='block w-full' type='text' name='name-on-card' id='name-on-card' />
                  </div>
                </div>
                <div>
                  <label>CVCCard</label>
                  <div>
                    <input className='block w-full' type='text' name='name-on-card' id='name-on-card' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
{/* Order Summary Section */}
        {/*
          Try to use the flex shorthand
          Remember max, min and ideal size when doing so
          Remember that the content of an element can impact how these values work together, too.

flex-1 = 1 1 0%
      flex: 0 1 auto;  Default flex value 

      flex-shrink: 0 = don't shrink EVER
      flex-shrink: 1 = shrink to the same size as the other elements

*/}

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
