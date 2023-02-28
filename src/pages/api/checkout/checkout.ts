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
    //    console.log(session)

    let user_id = session?.user?.id

    //let userCart = await Cart.findOne({ user: user_id, status: 'active' })

    /*if (!userCart) {
    return res.status(404).json({ message: 'User cart not found.' })
  }*/
    /*
    let newOrder = await Order.create({
      user: session?.user?.id,
      cart: userCart,
      contactInformation: {
        email: req.body.contactInformation.email,
      },
      creditCard: req.body.creditCard,
      mailingAddress: req.body.mailingAddress,
      billingAddress: req.body.billingAddress,
    })
*/
    let newOrder = await Order.create({
      user: req.body.user,
      cart: req.body.cart,
      contactInformation: {
        email: req.body.contactInformation.email,
      },
      creditCard: req.body.creditCard,
      shippingAddress: req.body.mailingAddress,
      billingAddress: req.body.billingAddress,
    })

    return res.status(200).json({
      message: 'Order created successfully.',
      order: newOrder,
    })
  } catch (error) {
    console.log(error)
  }
}
