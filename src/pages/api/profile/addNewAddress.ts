import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import User from '@models/userModel'

export default async function handler(req, res) {
  try {
    if (req.method !== 'PATCH') {
      return
    }

    const session = await getServerSession(req, res, authOptions)

    let user = await User.findById(session?.user?.id)

    let addressIndex = user.addresses.findIndex((i) => i.label.toLowerCase() === req.body.addressForm.label.toLowerCase())
    if (addressIndex > -1) {
      return res.status(401).json({ message: ' arlen' })
    } else {
      user.addresses.push(req.body.addressForm)
    await user.save()
    }

    return res.status(200).json({
      message: 'Address added successfully.',
      user,
    })
  } catch (error) {
    console.log(error)
  }
}
