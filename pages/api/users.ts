import connectDB from '../../src/connectDB'
import User from '../../src/models/userModel'

connectDB()

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      // console.log(email, password, firstName, lastName)

      const user = await User.find({})

      return res.status(200).send(user)
      console.log('yo', user)
    }
  } catch (err) {
    console.log(err)
  }
}
