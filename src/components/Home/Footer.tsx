import Image from 'next/image'
import { Jost } from '@next/font/google'
const jost = Jost({ subsets: ['latin'] })

const Order = () => {
  return (
    <section className={`py-12 bg-white text-[#3a3a3c] ${jost.className}`}>
      <div className='md:mx-10 mx-40 flex flex-col md:flex-row items-start justify-center gap-8 md:gap-24 text-sm'>
        <div className='flex flex-col gap-4'>
          <div>
            <Image src='/img/logo.png' alt='The Grind logo' height='200' width='200' className='top-0 left-0 w-[100%] height-[100%] object-contain ' />
          </div>
          <div className='flex flex-col'>
            <span className='uppercase bold font-bold'>Address</span>
            <span>
              11111 Arlen Dr.<br></br>Some Place, CA 91303
            </span>
          </div>
        </div>
        <div className='flex items-center gap-4 md:self-end'>
          <svg className='h-8 w-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
            <path d='M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z' />
          </svg>
          <svg className='h-8 w-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
            <path d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z' />
          </svg>
          <svg className='h-8 w-8' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
            <path d='M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z' />
          </svg>
        </div>
        <div className='flex flex-col gap-4 md:self-end'>
          <div className='flex flex-col'>
            <span className='uppercase font-bold'>Hours</span>
            <span>
              SUN - THUR 9AM-9PM<br></br>
              FRI - SAT 9AM-10PM
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-4 md:self-end'>
          <div className='flex flex-col'>
            <span className='uppercase font-bold'>Contact</span>
            <span>(818) 555-5555</span>

            <span>info@thegrind.la</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Order
