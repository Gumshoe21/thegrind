import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const About = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const aboutVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1.0 } },
    hidden: { opacity: 0, scale: 0.5 },
  }

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } /*else {
      control.start('hidden')
    }*/
  }, [control, inView])

  return (
    <section className='bg-[rgb(28,28,28,0.03)]'>
      <motion.div
        className='flex flex-col items-center justify-center text-center py-24  font-serif gap-16  text-[#160F07]'
        variants={aboutVariant}
        animate={control}
        initial='hidden'
      >
        <div className='flex flex-col gap-8'>
          <div className='uppercase text-base font-bold tracking-[0.3rem] px-12'>It all starts in the kitchen.</div>
          <p className='tracking-[0.2rem] text-sm px-16'>
            <span className='font-bold'>The Grind</span> is a family owned and operated bakery and cafe based in Sherman Oaks, CA.<br></br>
            All our delicious pastries and baked goods are made in-house and are served fresh,<br></br>
            and our coffee is ground and brewed using top-quality, never-frozen beans.<br></br>
            Our ingredients are 100% organic and purchased from local, independent vendors<br></br>
            with a high reputation for quality and consistency.<br></br>
          </p>
        </div>
        <button
          ref={ref}
          className='uppercase font-semibold tracking-[0.2rem] text-sm border-2 py-4 px-4 border-[#160F07] hover:bg-[#160F07] hover:text-[white] transition-all'
        >
          Learn More
        </button>
      </motion.div>
    </section>
  )
}

export default About
