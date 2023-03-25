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

    const orders = await Order.find({})

    if (!orders) {
      return res.status(401).json({ error: 'No orders found.' })
    }

    return res.status(200).json({
      message: 'Orders retrieved successfully.',
      orders,
    })
  } catch (error) {
    console.log(error)
  }
}
