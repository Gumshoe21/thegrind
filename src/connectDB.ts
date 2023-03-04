import mongoose from 'mongoose'

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return
  }
  await mongoose.connect(process.env.MONGODB_URI || '').then((con) => console.log('connected to DB'))
}

export default connectDB
