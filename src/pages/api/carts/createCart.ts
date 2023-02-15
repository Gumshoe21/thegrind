import Cart from '@models/cartModel'
import connectDB from '@src/connectDB'

connectDB()

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return
    }

    const cart = await Cart.findOneAndUpdate(
      {
        user: req.body.user_id,
        status: 'active',
      },
      {
        $push: {
          ['products']: {
            id: req.body.product_id,
            name: req.body.productName,
            variants: {
              name: req.body.selectedVariant,
              price: req.body.currentPrice,
            },
          },
        },
      },
      {
        upsert: true,
      }
    )
  } catch (error) {console.log(error)}
}
