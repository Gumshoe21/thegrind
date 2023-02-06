import mongoose from 'mongoose'
import validator from 'validator'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required.'],
    default: "arlen",
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
