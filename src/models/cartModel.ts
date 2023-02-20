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
        quantity: {
          type: Number,
          validate: {
            validator: function (v) {
              return v > 0
            },
            message: (props) => `${props.path} must be greater than 0`,
          },
        },
        variant: { type: String, required: true },
        price: {
          type: Number,
          validate: {
            validator: function (v) {
              return v > 0
            },
            message: (props) => `${props.path} must be greater than 0`,
          },
        },
        total: { type: Number },
      },
    ],
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
)
cartSchema.set('toJSON', { virtuals: true })
cartSchema.pre('save', function (next) {
  for (let i = 0; i < this.items.length; i++) {
    const item = this.items[i]
    if (item.price && item.quantity) {
      item.total = item.quantity * item.price
    }
  }
  next()
})

cartSchema.virtual('totalPrice').get(function () {
  let totalPrice = 0

  this.items.forEach((item) => {
    if (item.quantity && item.price) {
      totalPrice += item.quantity * item.price
    }
  })
  return totalPrice
})

export default mongoose.models.Cart || mongoose.model('Cart', cartSchema)
