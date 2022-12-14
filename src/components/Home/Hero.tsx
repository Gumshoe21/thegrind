import { Jost } from '@next/font/google'

const jost = Jost({ subsets: ['latin'] })

const Hero = () => {
  return (
    <div className='h-[900px] sm:h-screen'>
      <section className='hero antialiased'>
        <div className={`${jost.className} h-full flex flex-col items-center text-center justify-center relative text-white md:leading-[6rem] select-none`}>
          <header className='text-[48px] md:text-[112px] uppercase'>The Grind</header>
          <header className='text-[18px] md:text-[36px] uppercase font-extralight tracking-[.1rem]'>Bakery & Cafe</header>
        </div>
      </section>
    </div>
  )
}

export default Hero
