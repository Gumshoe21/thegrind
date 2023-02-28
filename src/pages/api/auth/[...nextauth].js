import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '@lib/mongodb'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '@models/userModel'
import mongoose from 'mongoose'
import { ObjectId } from 'mongodb'
import NextAuth, { NextAuthOptions } from 'next-auth'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  database: process.env.MONGODB_URI,
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, user, token }) {
      if (user) {
        let userId = new ObjectId(user.id)
        const userObj = await User.findById(user.id)
        user.addresses = userObj.addresses
        console.log('userObj', userObj)
      }
      return { ...session, user, token }
    },
  },
}

export default NextAuth(authOptions)
