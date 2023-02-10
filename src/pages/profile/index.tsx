import Image from 'next/image'
import { Tab } from '@headlessui/react'
import TabButton from '@profile/TabButton'
import OrdersPanel from '@profile/OrdersPanel'
import ProfilePanel from '@profile/ProfilePanel'

interface ITabButton {
  label: string
}

export default function Profile() {
  return (
    <Tab.Group vertical>
      <div className='md:flex md:h-[calc(100vh-80px)]'>
        <div className='md:fixed z-auto overflow-x-hidden left-0 top-0 w-full md:max-w-xs flex h-full flex-1 flex-col border-r border-gray-200 bg-white'>
          <div className='flex flex-1 flex-col overflow-y-auto pt-5 pb-4'>
            <nav className=' flex-1 space-y-1 bg-white px-2' aria-label='Sidebar'>
              <Tab.List>
                <ul className='space-y-2'>
                  <TabButton label={'Settings'} />
                  <TabButton label={'Orders'} />
                </ul>
              </Tab.List>
            </nav>
          </div>
        </div>
        <div className='flex flex-col flex-1 items-center md:ml-[320px] mt-20'>
          <Tab.Panels className='w-full'>
            <ProfilePanel />
            <OrdersPanel />
          </Tab.Panels>
        </div>
      </div>
    </Tab.Group>
  )
}
