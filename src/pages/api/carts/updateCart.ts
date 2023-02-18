import Cart from '@models/cartModel'
import connectDB from '@src/connectDB'
import { getServerSession } from 'next-auth/next'

import { authOptions } from '../auth/[...nextauth]'

connectDB()

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)

  let userId = session?.user?.id

  try {
    if (req.method !== 'PATCH') {
      return
    }

    let { selectedQuantity } = req.body
    let { name, variant, price } = req.body.product

    let userCart = await Cart.findOne({ user: userId, status: 'active' })

    let itemIndex = userCart.items.findIndex((i) => i.name === name && i.variant === variant)

    let cartItem = userCart.items[itemIndex]

    cartItem.quantity = selectedQuantity
    userCart = await userCart.save()

    res.status(200).json({
      message: 'success',
      userCart,
    })
  } catch (error) {
    console.log(error)
  }
}
