import Cart from '@models/cartModel'
import connectDB from '@src/connectDB'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

connectDB()

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)

  let user_id = session?.user?.id

  try {
    if (req.method !== 'POST') {
      return
    }

    let cart = await Cart.findOne({ user: req.body.user_id, status: 'active' })

    res.status(200).json({
      cart,
      message: 'Cart found successfully.',
    })
  } catch (error) {
    console.log(error)
  }
}
