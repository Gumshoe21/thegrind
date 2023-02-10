import { Tab } from '@headlessui/react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

export default function ProfilePanel() {
  const { data: session } = useSession()
  return (
    <Tab.Panel>
      <div className='flex flex-col items-center flex-1 pt-20'>
        <div>
          <div>
            <Image width='150' height='150' className='rounded-full' src={session?.user?.image} alt='Profile picture' />
          </div>
          <p className='mt-4'>{session?.user?.name}</p>
          <p className='mt-2'>{session?.user?.email}</p>
        </div>
      </div>
    </Tab.Panel>
  )
}
