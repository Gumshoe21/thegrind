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
        <div className='flex flex-col gap-4 md:self-end'>Socials</div>
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
