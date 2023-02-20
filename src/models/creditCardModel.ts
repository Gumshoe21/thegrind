import mongoose from 'mongoose'

const creditCardSchema = new mongoose.Schema({
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
})

export default mongoose.models.creditCardSchema || mongoose.model('CreditCard', creditCardSchema)
