import { Jost } from '@next/font/google'
const jost = Jost({ subsets: ['latin'] })

const Order = () => {
  return (
    <section className='bakery antialiased'>
      <div className={`${jost.className} h-full flex flex-col items-center justify-center relative text-white  select-none gap-4`}>
        <span className='text-[32px] '>Order Online From Our Bakery</span>
        <div className='flex gap-8'>
          <button className='uppercase font-semibold tracking-[0.2rem] border-2 py-2 px-6 border-white hover:bg-[white] hover:text-[#160F07] transition-all'>
            Cookies
          </button>
          <button className='uppercase font-semibold tracking-[0.2rem] border-2 py-2 px-6 border-white hover:bg-[white] hover:text-[#160F07] transition-all'>
            Cakes
          </button>
          <button className='uppercase font-semibold tracking-[0.2rem] border-2 py-2 px-6 border-white hover:bg-[white] hover:text-[#160F07] transition-all'>
            Pastries
          </button>
        </div>
      </div>
    </section>
  )
}

export default Order
