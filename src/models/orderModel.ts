import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    contactInformation: {
      email: {
        type: String,
      },
    },
    creditCard: {
      type: mongoose.Types.ObjectId,
      ref: 'CreditCard',
    },
    shippingAddress: {
      type: mongoose.Types.ObjectId,
      ref: 'Address',
    },
    billingAddress: {
      type: mongoose.Types.ObjectId,
      ref: 'Address',
    },
    deliveryMethod: {
      type: String,
    },
    cart: {
      type: mongoose.Types.ObjectId,
      ref: 'Cart',
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
)

export default mongoose.models.Order || mongoose.model('Order', orderSchema)
