import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import Product from '@models/productModel'
import connectDB from '@src/connectDB'

connectDB()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return
    }

    const product = await Product.findOne({ name: req.body.name })

    if (product) {
      return res.status(422).json({ error: 'Name already exists' })
    }

    const newProduct = await new Product({
      name: req.body.name,
      variants: req.body.variants,
      price: req.body.price,
      imageSrc: req.body.imageSrc,
      imageAlt: req.body.imageAlt,
    }).save()

    return res.status(200).json({
      message: 'test',
      product: newProduct,
    })

  } catch (error) {
    console.log(error)
  }
}
