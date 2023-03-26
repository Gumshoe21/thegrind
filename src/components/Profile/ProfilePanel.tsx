import { Tab } from '@headlessui/react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useState, useRef, useLayoutEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import AddressesModal from '@profile/AddressesModal'
import NestedModal from '@profile/NestedModal'
export default function ProfilePanel() {
  const { data: session } = useSession()

  return (
    <Tab.Panel>
      <div className='flex flex-col items-center flex-1 pt-20'>
        <section className='mb-8'>
          <>
            <div>
              <Image width='150' height='150' className='rounded-full' src={session?.user?.image!} alt='Profile picture' />
            </div>
            <p>
              {session?.user?.addresses?.map((a) => (
                <div> {a.label}</div>
              ))}
            </p>
            <p className='mt-4'>{session?.user?.name}</p>
            <p className='mt-2'>{session?.user?.email}</p>
          </>
        </section>
        <section className='flex'>
          <AddressesModal>
            <NestedModal />
          </AddressesModal>
        </section>
      </div>
    </Tab.Panel>
  )
}
