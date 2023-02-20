import Cart from '@models/cartModel'
import Product from '@models/productModel'
import connectDB from '@src/connectDB'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import mongoose from 'mongoose'
connectDB()

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)

  let user_id = session?.user?.id
  try {
    if (req.method !== 'POST') {
      return
    }
    if (!user_id) {
      return res.status(401).json({ message: 'User not authenticated.' })
    }
    let { name, productQuantity, variantName, variantPrice, product_id } = req.body

    let cart = await Cart.findOne({ user: user_id, status: 'active' })

    // If a cart that both belongs to the user and has a status of 'active' doesn't exist, create one and add the item to it.
    if (!cart) {
      cart = await Cart.create({
        user: user_id,
        status: 'active',
        items: [
          {
            name: name,
            variant: variantName,
            price: +variantPrice,
            quantity: +productQuantity,
          },
        ],
      })
      // Otherwise, if such a cart does exist, try to find an item in it with the name of the item added.
    } else {
      let itemIndex = cart.items.findIndex((i) => i.variant === variantName && i.name === name)
      // If the item is already in the cart, incrememnt its quantity.
      if (itemIndex > -1) {
        let cartItem = cart.items[itemIndex]
        let quantityDelta = +productQuantity - cartItem.quantity // 3-4  = -1
        cartItem.quantity += +productQuantity
        cart.items[itemIndex] = cartItem
        // Otherwise, add it to the cart as a new item.
      } else {
        cart.items.push({
          name: name,
          variant: variantName,
          price: +variantPrice,
          quantity: +productQuantity,
        })
      }

      await cart.save()

      // Return the existing, newly-updated cart.
      return res.status(200).json({
        message: 'Cart item added/updated.',
        cart,
      })
    }
    // Return the newly created cart.
    res.status(200).json({
      message: 'Cart created.',
      cart,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong', error })
  }
}
