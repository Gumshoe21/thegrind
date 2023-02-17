import mongoose from 'mongoose'
import validator from 'validator'

const cartSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: 'inactive',
    },
    items: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: { type: Number },
        variant: { type: String },
        price: { type: String },
      },
    ],
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
)

export default mongoose.models.Cart || mongoose.model('Cart', cartSchema)
