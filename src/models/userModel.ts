import mongoose from 'mongoose'
import validator from 'validator'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'Please enter valid email address'],
  },
  addresses: [
    {
      label: {
        type: String,
        unique: true,
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
      zipCode: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
  ],
  creditCards: [
    {
      label: {
        type: String,
      },
      cardNumber: {
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
    },
  ],
  password: {
    type: String,
  },
  resetToken: { type: String },
  validEmail: { boolean: Boolean },
  emailToken: { type: String },
})

export default mongoose.models.User || mongoose.model('User', userSchema)

userSchema.virtual('address', {
  ref: 'Address',
  localField: 'addresses',
  foreignField: '_id',
  justOne: false,
})

userSchema.virtual('creditCard', {
  ref: 'CreditCard',
  localField: 'creditCards',
  foreignField: '_id',
  justOne: false,
})
