import Image from 'next/image'
import { Jost } from '@next/font/google'

const jost = Jost({ subsets: ['latin'] });

const Home = () => {
  return (
    <main>
      {/* HERO */}
      <div className='hero'>
        <div className={`${jost.className} h-full flex flex-col items-center justify-center relative text-white leading-[6rem] select-none`}>
          <span className='text-[148px] uppercase'>The Grind</span>
          <span className='text-[48px] uppercase font-extralight tracking-[.1rem]'>Bakery & Cafe</span>
        </div>
      </div>
      {/* ABOUT ME SNIPPET */}
      <div className='flex flex-col items-center justify-center text-center py-16 text-xl font-serif gap-8 bg-[rgb(28,28,28,0.09)] text-[#160F07]'>
        <div className='uppercase font-bold tracking-[0.3rem]'>It all starts in the kitchen.</div>
        <div className='tracking-[0.2rem]'>
          <span className='font-bold'>The Grind</span> is a family owned and operated bakery and cafe based in Sherman Oaks, CA.<br></br>
          All our delicious pastries and baked goods are made in-house and are served fresh,<br></br>
          and our coffee is ground and brewed using top-quality, never-frozen beans.<br></br>
          Our ingredients are 100% organic and purchased from local, independent vendors<br></br>
          with a high reputation for quality and consistency.<br></br>
        </div>
        <button className='uppercase font-semibold tracking-[0.2rem] border-2 py-6 px-6 border-black hover:bg-[#160F07] hover:text-[white] transition-all'>Learn More</button>
      </div>
    </main>
  )
}
export default Home;
