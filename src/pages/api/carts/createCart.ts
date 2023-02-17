import Cart from '@models/cartModel'
import Product from '@models/productModel'
import connectDB from '@src/connectDB'

connectDB()

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return
    }

    let { name, productQuantity, variantName, variantPrice, user_id, product_id } = req.body

    let cart = await Cart.findOne({ user: user_id, status: 'active' })

    // If a cart that both belongs to the user and has a status of 'active' doesn't exist, create one and add the item to it.
    if (!cart) {
      cart = await Cart.create({
        user: req.body.user_id,
        status: 'active',
        items: [
          {
            name: name,
            variant: variantName,
            price: variantPrice,
            quantity: productQuantity,
          },
        ],
      })
      // Otherwise, if such a cart does exist, try to find an item in it with the name of the item added.
    } else {
      let itemIndex = cart.items.findIndex((i) => i.name === name)
      // If the item is already in the cart, incrememnt its quantity.
      if (itemIndex > -1) {
        let cartItem = cart.items[itemIndex]
        let quantityDelta = +productQuantity - cartItem.quantity // 3-4  = -1
        cartItem.quantity += +quantityDelta
        cart.items[itemIndex] = cartItem
        // Otherwise, add it to the cart as a new item.
      } else {
        cart.items.push({
          name: name,
          variant: variantName,
          price: variantPrice,
          quantity: productQuantity,
        })
      }

      cart = await cart.save()

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
  }
}
