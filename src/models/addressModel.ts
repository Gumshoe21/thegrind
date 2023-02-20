import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
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
})

export default mongoose.models.Address || mongoose.model('Address', addressSchema)
