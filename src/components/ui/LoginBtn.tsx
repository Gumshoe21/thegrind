import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

export default function LoginBtn() {
  const { data: session } = useSession()
  console.log(session)
  if (session) {
    return (
      <>
        <Image className='inline rounded-3xl mr-2' src={`${session?.user?.image}`} height='25' width='25' alt='User Profile Pic' />
        <Link href='#' onClick={() => signOut()}>
          Sign out
        </Link>
      </>
    )
  }
  return (
    <>
      <Link href='#' onClick={() => signIn()}>
        Sign in
      </Link>
    </>
  )
}
