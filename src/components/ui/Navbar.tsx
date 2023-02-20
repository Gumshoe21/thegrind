import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Righteous } from '@next/font/google'
import LoginBtn from './LoginBtn'

const righteous = Righteous({ weight: '400' })
const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const handleShowNav = () => {
    setShowNav(!showNav)
  }
  return (
    <>
      <nav className='bg-white self-stretch px-2 py-2 sm:px-4 rounded'>
        <div className='flex flex-wrap justify-between items-stretch  gap-4'>
          {/* main content */}

          <Link href='/' className='flex items-center ml-4'>
            <Image src='/img/logo.png' alt='The Grind Logo' width={150} height={150} />
          </Link>

          {/* menu button */}
          <button
            onClick={handleShowNav}
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 '
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>

          {/* nav items */}
          <div className={`${showNav ? '' : 'hidden'} w-full md:block md:w-auto text-black  uppercase font-sm`} id='navbar-default'>
            <ul className='flex flex-col p-4 text-center md:text-left rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 items-center dark:border-gray-700'>
              <li>
                <Link href='/contact' className='block py-2 pr-4 pl-3 text-black rounded md:bg-transparent md:p-0 ' aria-current='page'>
                  Contact
                </Link>
              </li>
{/*


*/}
              <li>
                <Link href='/order/categories/chosen&=' className='block py-2 pr-4 pl-3 text-black rounded md:bg-transparent md:p-0 ' aria-current='page'>
                  Order
                </Link>
              </li>
              <li>
                <Link href='/order/cart' className='block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 ' aria-current='page'>
<svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
                </Link>
              </li>
              <li>
                <LoginBtn />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
