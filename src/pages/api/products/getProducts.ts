import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import Product from '@models/productModel'
import connectDB from '@src/connectDB'

connectDB()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return
    }

    const products = await Product.find({})

    if (!products) {
      return res.status(401).json({ error: 'No products found.' })
    }

    return res.status(200).json({
      message: 'success',
      products,
    })
  } catch (error) {
    console.log(error)
  }
}
