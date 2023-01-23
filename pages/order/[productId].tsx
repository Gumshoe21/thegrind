import Image from 'next/image'

const ProductDetailPage = (props) => {
  const { product } = props

  return (
    <main className='flex'>
      {/* Content container */}
      <div className='mx-auto lg:grid lg:grid-cols-2 max-w-2xl lg:max-w-7xl gap-x-16 px-8 py-24 '>
        {/* Product details section */}
        <section className='max-w-lg justify-between items-stretch content-stretch col-start-1 self-end flex flex-col '>
          <nav className='text-md text-gray-500'>Products&nbsp;&nbsp;/&nbsp;&nbsp; Cookies</nav>
          <header className='text-4xl mt-4 font-bold'>{product.name}</header>
          <div className='text-2xl mt-2'>{product.price}</div>
          <p className='mt-4 text-md text-gray-500'>Freshly baked in-house and shipped same day!</p>
        </section>
        {/* Product image */}
        <section className='col-start-2 row-span-2 self-center mt-10 flex '>
          <div className='overflow-hidden rounded-lg'>
            <Image src={`/img/products/${product.imageSrc}`} width='440' height='640' />
          </div>
        </section>
        {/* Options/add to cart section */}
        <section className='flex flex-col col-start-1 row-start-2 self-start max-w-lg mt-10 lg:mx-0 '>
          <div className='flex flex-col gap-4'>
            <div className='text-md'>Amount</div>
            <div className='grid grid-cols-2  items-center justify-items-center  gap-2'>
              <button className='border-2 border-primary-600 rounded-md px-4 w-full py-4'>12</button>
              <button className='border-2 border-gray-300 rounded-md px-4 w-full py-4'>12</button>
            </div>
          </div>
          <button className='text-white mt-10 border b-2  p-4 rounded-md bg-primary-600 hover:bg-primary-700'> Add to Cart</button>
        </section>
      </div>
    </main>
  )
}
export async function getStaticProps(context) {
  // p1, p2, etc.
  const productId = context.params.productId

  const res = await fetch('https://thegrind-3097f-default-rtdb.firebaseio.com/products.json')
  const data = await res.json()

  const products = []

  for (const key in data) {
    products.push({
      // p1, p2, etc.
      id: key,
      ...data[key],
    })
  }

  let product = await products.find((p) => p.id === productId)

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
