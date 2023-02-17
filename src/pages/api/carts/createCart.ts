import Cart from '@models/cartModel'
import Product from '@models/productModel'
import connectDB from '@src/connectDB'

connectDB()

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return
    }

    let { name, productQuantity, variantName, variantPrice, userEmail, product_id } = req.body

    let cart = await Cart.findOne({ user: req.body.user_id, status: 'active' })

    if (!cart) {
      cart = await Cart.create({
        user: req.body.user_id,
        status: 'active',
        items: [
          {
            name: 'Chocolate Chip Cookies',
            variant: 'arlen',
            quantity: 4,
            price: '3',
          },
        ],
      })
    } else {
      let itemIndex = cart.items.findIndex((i) => i.name === name)
      if (itemIndex > -1) {
        let productItem = cart.items[itemIndex]
        productItem.quantity += productQuantity
        cart.items[itemIndex] = productItem
      } else {
        cart.items.push({
          name: 'Chocolate Chip Cookies',
          variant: 'arlen',
          quantity: 4,
          price: '3',
        })
      }
      cart = await cart.save()
      return res.status(200).send({
        message: 'Cart item updated.',
        cart,
      })
    }
    res.status(200).json({
      message: 'Cart created.',
      cart,
    })
  } catch (error) {
    console.log(error)
  }
}
