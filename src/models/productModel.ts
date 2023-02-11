import mongoose from 'mongoose'
import validator from 'validator'

const productSchema = new mongoose.Schema({
  pId: {
    type: String,
    required: [true, 'Product must have a pId.'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Product name is required.'],
    unique: true,
  },
  variants: [String],
  category: {
    type: String,
  },
  price: {
    type: String,
  },
  imageSrc: {
    type: String,
  },
  imageAlt: {
    type: String,
  },
})

export default mongoose.models.Product || mongoose.model('Product', productSchema)
