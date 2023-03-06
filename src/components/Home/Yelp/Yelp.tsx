import Image from 'next/image'
import YelpReview from '@home/Yelp/YelpReview'
import { Jost } from '@next/font/google'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const jost = Jost({ subsets: ['latin'] })

const variants = {
  first: {
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0, scale: 0.25 },
  },
  second: {
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0.25 },
  },
  third: {
    visible: { opacity: 1, scale: 1, transition: { duration: 2.5 } },
    hidden: { opacity: 0, scale: 0.25 },
  },
}
const Yelp = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } /*else {
      control.start('hidden')
    }*/
  }, [control, inView])

  return (
    <section
      className={`py-16 ${jost.className} gap-20 flex flex-col items-center justify-center text-center bg-gradient-to-t from-[#140904] to-[#291810] bg-[linear-gradient(174deg, rgba(35,24,11,1) 0%, rgba(97,74,48,0.9311163895486936) 84%)] text-white px-20`}
    >
      <div className='flex flex-col md:flex-row justify-center content-center gap-8  font-serif items-center'>
        <header className={`${jost.className} font-light pt-6 font-sans tracking-wider uppercase text-3xl`}>People love us on</header>
        <Image src='/img/yelp-logo.svg' alt='Headshot' height='200' width='200' className='' />
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-20'>
        <motion.div variants={variants.first} initial='hidden' animate={control} className='basis-1/3 flex-shrink-0'>
          <YelpReview name='Fiona Martinez' src='/img/headshot-1.jpeg' height='175' width='175' className=' rounded-full border-white border-2'>

            &quot;Some of the best coffee I&apos;ve ever tasted. Great place to study, too.&quot;
          </YelpReview>
        </motion.div>

        <motion.div ref={ref} variants={variants.second} initial='hidden' animate={control} className='flex-shrink-0 basis-1/3'>
          <YelpReview name='John Mason' src='/img/headshot-2.jpeg' height='175' width='175' className='rounded-full border-white border-2'>
            &quot;I love the atmosphere of this place. The owners are very kind and give off a warm vibe.&quot;
          </YelpReview>
        </motion.div>

        <motion.div variants={variants.third} initial='hidden' animate={control} className='flex-shrink-0 basis-1/3'>
          <YelpReview name='Hank Chen' src='/img/headshot-3.jpg' height='175' width='175' className='rounded-full border-white border-2'>
            Whenever I grab a muffin on my way to work, it's always fresh. Same with everything else. They're delicious, too!
          </YelpReview>
        </motion.div>
      </div>
    </section>
  )
}

export default Yelp
