import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import Cart from '@models/cartModel'
import Order from '@models/orderModel'

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return
    }

    const session = await getServerSession(req, res, authOptions)

    let user_id = session?.user?.id

    let userCart = await Cart.findOne({ user: user_id, status: 'active' })

    if (userCart) {
      userCart.status = 'inactive'
      await userCart.save()
    }

    let newOrder = await Order.create({
      user: session?.user?.id,
      cart: userCart,
      contactInformation: req.body.contactInformation,
      deliveryMethod: req.body.deliveryMethod,
      creditCard: req.body.creditCard,
      shippingAddress: req.body.shippingAddress,
      billingAddress: req.body.billingAddress,
    })
    let orderId = newOrder._id.toString()

    return res.status(200).json({
      message: 'Order created successfully.',
      orderId,
    })
  } catch (error) {
    console.log(error)
  }
}
