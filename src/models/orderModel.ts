import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    email: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    street: {
      type: String,
    },
    unit: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    postal: {
      type: String,
    },
    phone: {
      type: String,
    },
    deliveryMethod: {
      type: String,
    },
    creditCard: {
      type: String,
    },
    nameOnCC: {
      type: String,
    },
    expDate: {
      type: String,
    },
    cvc: {
      type: String,
    },
    products: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
      },
    ],
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
)

export default mongoose.models.Order || mongoose.model('Order', orderSchema)
