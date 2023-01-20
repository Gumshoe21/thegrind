import Image from 'next/image'

const ProductDetailPage = (props) => {
  const { product } = props
  /*
  return (
    <main className='bg-blue-100 '>
      <div className='grid grid-cols-2   mx-auto items-center  max-w-4xl '>
        <div className='max-w-lg justify-between items-stretch content-stretch col-start-1 self-end'>
          <nav className='font-serif text-xl'>Products / Cookies</nav>
          <header className='text-4xl'>{product.name}</header>
          <span className='text-2xl'>{product.price}</span>
          <p>Freshly baked in-house and shipped ASAP!</p>
        </div>

        <div className='flex flex-col col-start-1 row-start-2 self-start max-w-lg'>
          <div className='flex flex-col gap-4'>
            <div>Amount</div>
            <div className='grid grid-cols-2  items-center justify-items-center'>
              <button className='border b-2 border-black rounded-md px-4 w-full py-4'>12</button>
              <button className='border b-2 border-black rounded-md px-4 w-full py-4'>12</button>
            </div>
          </div>
          <button> Add to Cart</button>
        </div>

        <div className='col-start-2 row-span-2 self-center'>
          <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-lg'>

            <Image src='/img/bag.jpeg' width='1280' height='1280' />
          </div>
        </div>
      </div>
    </main>
  )
*/
  return (
    <>
      <div className='bg-white'>
        <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:max-w-lg lg:self-end'>
            <nav aria-label='Breadcrumb'>
              <ol role='list' className='flex items-center space-x-2'>
                <li>
                  <div className='flex items-center text-sm'>
                    <a href='#' className='font-medium text-gray-500 hover:text-gray-900'>
                      Travel
                    </a>

                    <svg
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      aria-hidden='true'
                      className='ml-2 h-5 w-5 flex-shrink-0 text-gray-300'
                    >
                      <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
                    </svg>
                  </div>
                </li>

                <li>
                  <div className='flex items-center text-sm'>
                    <a href='#' className='font-medium text-gray-500 hover:text-gray-900'>
                      Bags
                    </a>
                  </div>
                </li>
              </ol>
            </nav>

            <div className='mt-4'>
              <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Everyday Ruck Snack</h1>
            </div>

            <section aria-labelledby='information-heading' className='mt-4'>
              <h2 id='information-heading' className='sr-only'>
                Product information
              </h2>

              <div className='flex items-center'>
                <p className='text-lg text-gray-900 sm:text-xl'>$220</p>

                <div className='ml-4 border-l border-gray-300 pl-4'>
                  <h2 className='sr-only'>Reviews</h2>
                  <div className='flex items-center'>
                    <div>
                      <div className='flex items-center'>
                        <svg
                          className='text-yellow-400 h-5 w-5 flex-shrink-0'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                            clip-rule='evenodd'
                          />
                        </svg>
                        <svg
                          className='text-yellow-400 h-5 w-5 flex-shrink-0'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                            clip-rule='evenodd'
                          />
                        </svg>

                        <svg
                          className='text-yellow-400 h-5 w-5 flex-shrink-0'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                            clip-rule='evenodd'
                          />
                        </svg>

                        <svg
                          className='text-yellow-400 h-5 w-5 flex-shrink-0'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                            clip-rule='evenodd'
                          />
                        </svg>

                        <svg
                          className='text-gray-300 h-5 w-5 flex-shrink-0'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </div>
                      <p className='sr-only'>4 out of 5 stars</p>
                    </div>
                    <p className='ml-2 text-sm text-gray-500'>1624 reviews</p>
                  </div>
                </div>
              </div>

              <div className='mt-4 space-y-6'>
                <p className='text-base text-gray-500'>
                  Don&#039;t compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips,
                  crisps, fries, biscuits, crackers, and cookies secure.
                </p>
              </div>

              <div className='mt-6 flex items-center'>
                <svg
                  className='h-5 w-5 flex-shrink-0 text-green-500'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                    clip-rule='evenodd'
                  />
                </svg>
                <p className='ml-2 text-sm text-gray-500'>In stock and ready to ship</p>
              </div>
            </section>
          </div>

          <div className='mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center'>
            <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-lg'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg'
                alt='Model wearing light green backpack with black canvas straps and front zipper pouch.'
                className='h-full w-full object-cover object-center'
              />
            </div>
          </div>

          <div className='mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start'>
            <section aria-labelledby='options-heading'>
              <h2 id='options-heading' className='sr-only'>
                Product options
              </h2>

              <form>
                <div className='sm:flex sm:justify-between'>
                  <fieldset>
                    <legend className='block text-sm font-medium text-gray-700'>Size</legend>
                    <div className='mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                      <div className='relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none'>
                        <input
                          type='radio'
                          name='size-choice'
                          value='18L'
                          className='sr-only'
                          aria-labelledby='size-choice-0-label'
                          aria-describedby='size-choice-0-description'
                        />
                        <p id='size-choice-0-label' className='text-base font-medium text-gray-900'>
                          18L
                        </p>
                        <p id='size-choice-0-description' className='mt-1 text-sm text-gray-500'>
                          Perfect for a reasonable amount of snacks.
                        </p>
                        <div className='pointer-events-none absolute -inset-px rounded-lg border-2' aria-hidden='true'></div>
                      </div>

                      <div className='relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none'>
                        <input
                          type='radio'
                          name='size-choice'
                          value='20L'
                          className='sr-only'
                          aria-labelledby='size-choice-1-label'
                          aria-describedby='size-choice-1-description'
                        />
                        <p id='size-choice-1-label' className='text-base font-medium text-gray-900'>
                          20L
                        </p>
                        <p id='size-choice-1-description' className='mt-1 text-sm text-gray-500'>
                          Enough room for a serious amount of snacks.
                        </p>
                        <div className='pointer-events-none absolute -inset-px rounded-lg border-2' aria-hidden='true'></div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className='mt-4'>
                  <a href='#' className='group inline-flex text-sm text-gray-500 hover:text-gray-700'>
                    <span>What size should I buy?</span>
                    <svg
                      className='ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </a>
                </div>
                <div className='mt-10'>
                  <button
                    type='submit'
                    className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50'
                  >
                    Add to bag
                  </button>
                </div>
                <div className='mt-6 text-center'>
                  <a href='#' className='group inline-flex text-base font-medium'>
                    <svg
                      className='mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
                      />
                    </svg>
                    <span className='text-gray-500 hover:text-gray-700'>Lifetime Guarantee</span>
                  </a>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>

      <main>
        {/*        <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>*/}
        {/*          <div className='lg:max-w-lg lg:self-end'>*/}
        <div className='grid grid-cols-2   mx-auto items-center  max-w-7xl gap-x-8 px-8 py-24 '>
          <div className='max-w-lg justify-between items-stretch content-stretch col-start-1 self-end'>
            <nav className='text-md text-gray-500'>Products&nbsp;&nbsp;/&nbsp;&nbsp; Cookies</nav>
            <header className='text-4xl mt-4 font-bold'>{product.name}</header>
            <div className='text-2xl mt-2'>{product.price}</div>
            <p className='mt-4 text-md text-gray-500'>Freshly baked in-house and shipped same day!</p>
          </div>

          <div className='flex flex-col col-start-1 row-start-2 self-start max-w-lg mt-10'>
            <div className='flex flex-col gap-4'>
              <div className='text-md'>Amount</div>
              <div className='grid grid-cols-2  items-center justify-items-center  gap-2'>
                <button className='border-2 border-primary-600 rounded-md px-4 w-full py-4'>12</button>
                <button className='border-2 border-gray-300 rounded-md px-4 w-full py-4'>12</button>
              </div>
            </div>
            <button className='text-white mt-10 border b-2  p-4 rounded-md bg-primary-600 hover:bg-primary-700'> Add to Cart</button>
          </div>

          <div className='col-start-2 row-span-2 self-center'>
            <div className='aspect-w-1 aspect-h-1 overflow-hidden rounded-lg'>
              <Image src='/img/bag.jpeg' width='1280' height='1280' />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export async function getStaticProps(context) {
  const productId = context.params.productId
  const res = await fetch('https://thegrind-3097f-default-rtdb.firebaseio.com/products.json')
  const data = await res.json()
  const products = []

  for (const key in data) {
    products.push({
      id: data[key].id,
      ...data[key],
    })
  }

  const product = await products.find((p) => p.id === productId)

  return {
    props: {
      product,
    },
    revalidate: 30,
  }
}

export async function getStaticPaths() {
  const res = await fetch('https://thegrind-3097f-default-rtdb.firebaseio.com/products.json')

  const data = await res.json()

  let products = []

  for (const key in data) {
    products.push({
      id: key,
      ...data[key],
      key,
    })
  }

  const paths = products.map((p) => ({ params: { productId: p.id.toString() } }))
  return {
    paths: paths,
    fallback: false,
  }
}
export default ProductDetailPage
