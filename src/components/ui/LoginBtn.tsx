import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
/*

        */
export function MenuItem({ label, href, onClick }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <>
          <Link href={href} onClick={() => signOut()}>
            {label}
          </Link>
        </>
      )}
    </Menu.Item>
  )
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Menu as='div' className='mt-2 sm:mt-0 relative flex-shrink-0'>
          <div>
            <Menu.Button className='flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
              <span className='sr-only'>Open user menu</span>

              <img className='h-8 w-8 rounded-full' src={`${session?.user?.image}`} alt='' />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <Menu.Item>
                {({ active }) => (
                  <Link className='block py-2 px-4 text-sm text-gray-700' href='/profile'>
                    Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link className='block py-2 px-4 text-sm text-gray-700' href='#' onClick={() => signOut()}>
                    Sign out
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
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
