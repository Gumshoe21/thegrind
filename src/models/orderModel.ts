import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    creditCard: {
      type: mongoose.Types.ObjectId,
      ref: 'CreditCard',
    },
    mailingAddress: {
      type: mongoose.Types.ObjectId,
      ref: 'Address',
    },
    billingAddress: {
      type: mongoose.Types.ObjectId,
      ref: 'Address',
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
