import connectDB from '@src/connectDB'
import User from '@models/userModel'

connectDB()

export default async (req, res) => {
  try {
    if (req.method === 'GET') {

      const user = await User.find({})

      return res.status(200).send(user)
    }
  } catch (err) {
    console.log(err)
  }
}
