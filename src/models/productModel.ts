import mongoose from 'mongoose'
import validator from 'validator'

const productSchema = new mongoose.Schema({
  pId: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Product name is required.'],
  },
  variants: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
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


