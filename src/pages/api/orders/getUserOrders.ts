import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import Order from '@models/orderModel'

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return
    }

    const session = await getServerSession(req, res, authOptions)

    let user_id = session?.user?.id

    let userOrders = await Order.find({ user: user_id })

    if (!userOrders) {
      return res.status(404).json({ message: 'BEEG problem.' })
    }

    return res.status(200).json({
      message: 'Orders found successfully.',
      userOrders,
    })
  } catch (error) {
    console.log(error)
  }
}
