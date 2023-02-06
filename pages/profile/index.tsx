import Image from 'next/image'
import { Tab } from '@headlessui/react'

import { useSession } from 'next-auth/react'

export default function Profile() {
  const { data: session } = useSession()

  return (
    <Tab.Group vertical>
      <div className='flex h-[calc(100vh-73px)]'>
        <div className='left-0 top-0 max-w-xs flex h-full flex-1 flex-col border-r border-gray-200 bg-white'>
          <div className='flex flex-1 flex-col overflow-y-auto pt-5 pb-4'>
            <nav className=' flex-1 space-y-1 bg-white px-2' aria-label='Sidebar'>
              <ul>
                <Tab.List>
                  <Tab as='li'>
                    <a
                      href='#'
                      className='bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    >
                      <svg
                        className=' h-6 w-6 text-gray-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        class='w-6 h-6'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
                        />
                        <path stroke-linecap='round' stroke-linejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                      </svg>

                      <span className='flex-1 ml-2'>Settings</span>
                    </a>
                  </Tab>
                  <Tab as='li'>
                    <a
                      href='#'
                      className='bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    >
                      <svg
                        className=' h-6 w-6 text-gray-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        class='w-6 h-6'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
                        />
                        <path stroke-linecap='round' stroke-linejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                      </svg>

                      <span className='flex-1 ml-2'>Orders</span>
                    </a>
                  </Tab>
                </Tab.List>
              </ul>
            </nav>
          </div>
          <div className='flex flex-shrink-0 border-t border-gray-200 p-4'>
            <a href='#' className='group block w-full flex-shrink-0'>
              <div className='flex items-center'>
                <div>
                  <img
                    className='inline-block h-9 w-9 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>Tom Cook</p>
                  <p className='text-xs font-medium text-gray-500 group-hover:text-gray-700'>View profile</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center justify-start flex-1 pt-20'>
          <Tab.Panels>
            <Tab.Panel>
                <div className='flex flex-col items-center'>
                  <div>
                    <Image width='150' height='150' className='rounded-full' src={session?.user?.image} />
                  </div>
                  <p className='mt-4'>{session?.user?.name}</p>
                  <p className='mt-2'>{session?.user?.email}</p>
                </div>
            </Tab.Panel>
            <Tab.Panel>
              <div>panel 2 </div>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </div>
    </Tab.Group>
  )
}
