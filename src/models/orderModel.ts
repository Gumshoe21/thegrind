import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    contactInformation: {
      email: {
        type: String,
      },
    },
    creditCard: {
  cardNumber: {
    type: String,
  },
  nameOnCard: {
    type: String,
  },
  expDate: {
    type: String,
  },
  cvc: {
    type: String,
  },

    },
    shippingAddress: {
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
      zipCode: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
    billingAddress: {
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
      zipCode: {
        type: String,
      },
      phone: {
        type: String,
      },
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
