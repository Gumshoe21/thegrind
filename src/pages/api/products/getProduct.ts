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

    const product = await Product.findOne({ id: req.body.id })

    if (!product) {
      return res.status(401).json({ error: 'Product not found.' })
    }

    return res.status(200).json({
      message: 'test',
      product,
    })

  } catch (error) {
    console.log(error)
  }
}
