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
  password: {
    type: String,
  },
  resetToken: { type: String },
  update: { type: String, required: true, default: 'test' },
  validEmail: { boolean: Boolean },
  emailToken: { type: String },
})

export default mongoose.models.User || mongoose.model('User', userSchema)
