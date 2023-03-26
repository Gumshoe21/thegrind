import NextAuth, { DefaultSession } from 'next-auth'
import { Address, AddressWithoutLabel, CreditCard, CreditCardWithoutLabel } from '@types'
import mongoose from 'mongoose'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      id: string
      addresses: Address[]
      creditCards: CreditCard[]
    } & DefaultSession['user']
  }
}
