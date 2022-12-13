import Image from 'next/image'
import { Jost } from '@next/font/google'
import YelpReview from '@home/Yelp/YelpReview'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const jost = Jost({ subsets: ['latin'] })
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
}
const Home = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <main>
      {/* HERO */}
      <section className='hero antialiased'>
        <div className={`${jost.className} h-full flex flex-col items-center text-center justify-center relative text-white leading-[6rem] select-none`}>
          <header className='text-[112px] uppercase'>The Grind</header>
          <header className='text-[36px] uppercase font-extralight tracking-[.1rem]'>Bakery & Cafe</header>
        </div>
      </section>

      {/* ABOUT ME SNIPPET */}
      <section className='flex flex-col items-center justify-center text-center py-16 text-xl font-serif gap-8 bg-[rgb(28,28,28,0.03)] text-[#160F07]'>
        <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className='uppercase font-bold tracking-[0.3rem]'>It all starts in the kitchen.</motion.div>
        <p className='tracking-[0.2rem]'>
          <span className='font-bold'>The Grind</span> is a family owned and operated bakery and cafe based in Sherman Oaks, CA.<br></br>
          All our delicious pastries and baked goods are made in-house and are served fresh,<br></br>
          and our coffee is ground and brewed using top-quality, never-frozen beans.<br></br>
          Our ingredients are 100% organic and purchased from local, independent vendors<br></br>
          with a high reputation for quality and consistency.<br></br>
        </p>
        <button className='uppercase font-semibold tracking-[0.2rem] border-2 py-6 px-6 border-[#160F07] hover:bg-[#160F07] hover:text-[white] transition-all'>
          Learn More
        </button>
      </section>

      {/* YELP */}
      <section className={`py-20 ${jost.className} gap-12 flex flex-col items-center justify-center text-center bg-primary-900 text-white px-20`}>
        <div className='flex flex-col gap-4 font-serif items-center'>
          <Image src='/img/yelp-logo.svg' alt='Headshot' height='175' width='175' className='' />
        </div>
        <div className='flex items-center justify-center gap-20'>
          <YelpReview name='Fiona Martinez' src='/img/headshot-1.jpeg' height='175' width='175' className='rounded-full border-white border-2'>
            &quot;Some of the best coffee I&apos;ve ever tasted. Great place to study, too.&quot;
          </YelpReview>
          <YelpReview name='John Mason' src='/img/headshot-2.jpeg' height='175' width='175' className='rounded-full border-white border-2'>
            &quot;Some of the best coffee I&apos;ve ever tasted. Great place to study, too.&quot;
          </YelpReview>
          <YelpReview name='Hank Chen' src='/img/headshot-3.jpg' height='175' width='175' className='rounded-full border-white border-2'>
            &quot;Some of the best coffee I&apos;ve ever tasted. Great place to study, too.&quot;
          </YelpReview>
        </div>
      </section>

      {/* ORDER ONLINE */}
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

      {/* FOOTER */}
      <section className={`py-12 bg-white text-[#3a3a3c] ${jost.className}`}>
        <div className='md:mx-10 mx-40 flex flex-col md:flex-row items-start justify-center gap-8 md:gap-24'>
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
    </main>
  )
}
export default Home
