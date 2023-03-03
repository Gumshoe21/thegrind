import NextAuth, { DefaultSession } from 'next-auth'
import { Address, CreditCard } from '@types'
declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      addresses: Address[]
      creditCards: CreditCard[]
    } & DefaultSession['user']
  }
}
