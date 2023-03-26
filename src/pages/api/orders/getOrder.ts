import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import Order from '@models/orderModel'
import connectDB from '@src/connectDB'

connectDB()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return
    }
    const order = await Order.findById(req.query.orderId)

    if (!order) {
      return res.status(401).json({ error: 'Order not found.' })
    }

    return res.status(200).json({
      message: 'Order found successfully.',
      order,
    })
  } catch (error) {
    console.log(error)
  }
}
