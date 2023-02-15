import Product from '@models/productModel'
import mongoose from 'mongoose'

const options = { discriminatorKey: 'CartItem' }

const cartItemProductSchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
    },
    variant: {
      type: String,
    },
  },
  options
)

const CartItemProduct = mongoose?.models?.Product?.discriminators?.CartItemProduct || Product.discriminator('CartItem', cartItemProductSchema)

export default CartItemProduct
