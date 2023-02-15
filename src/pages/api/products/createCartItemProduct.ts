import CartItemProduct from '@models/cartItemProductModel'
import connectDB from '@src/connectDB'

connectDB()

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return
    }

    const cartItemProduct = await new CartItemProduct({
      pId: req.body.pId,
      name: req.body.name,
      quantity: req.body.quantity,
      variant: req.body.variant,
    }).save()

    return res.status(200).json({
      message: 'hehehehe it worked lol!',
      cartItemProduct,
    })

  } catch (error) {
    console.log(error)
  }
}
