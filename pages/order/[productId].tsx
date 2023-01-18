const ProductDetailPage = (props) => {
  const { product } = props
  return <div>sup</div>
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
