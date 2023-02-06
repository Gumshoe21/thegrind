import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../../src/models/productModel'
import connectDB from '../../../src/connectDB'

connectDB()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return
    }

    const products = await Product.insertMany(req.body)

    if (!products) {
      return res.status(401).json({ error: 'Products not provided.' })
    }

    return res.status(200).json({
      message: 'test',
      products,
    })
  } catch (error) {
    console.log(error)
  }
}
