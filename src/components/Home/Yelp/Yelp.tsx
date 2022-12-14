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
    <section className={`py-16 ${jost.className} gap-20 flex flex-col items-center justify-center text-center bg-primary-900 text-white px-20`}>
      <div className='flex flex-col  font-serif items-center'>
        <Image src='/img/yelp-logo.svg' alt='Headshot' height='175' width='175' className='' />
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-20'>
        {/*<motion.div ref={ref} variants={boxVariant} initial='hidden' animate={control} className='flex items-center justify-center gap-20'>
         */}
        <motion.div variants={variants.first} initial='hidden' animate={control} className=''>
          <YelpReview name='Fiona Martinez' src='/img/headshot-1.jpeg' height='175' width='175' className='rounded-full border-white border-2'>
            &quot;Some of the best coffee I&apos;ve ever tasted. Great place to study, too.&quot;
          </YelpReview>
        </motion.div>

        <motion.div ref={ref} variants={variants.second} initial='hidden' animate={control}>
          <YelpReview name='John Mason' src='/img/headshot-2.jpeg' height='175' width='175' className='rounded-full border-white border-2'>
            &quot;Some of the best coffee I&apos;ve ever tasted. Great place to study, too.&quot;
          </YelpReview>
        </motion.div>

        <motion.div variants={variants.third} initial='hidden' animate={control}>
          <YelpReview name='Hank Chen' src='/img/headshot-3.jpg' height='175' width='175' className='rounded-full border-white border-2'>
            &quot;Some of the best coffee I&apos;ve ever tasted. Great place to study, too.&quot;
          </YelpReview>
        </motion.div>
      </div>
    </section>
  )
}

export default Yelp
