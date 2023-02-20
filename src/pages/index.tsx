import Image from 'next/image'
import YelpReview from '@home/Yelp/YelpReview'
import Hero from '@home/Hero'
import About from '@home/About'
import Yelp from '@home/Yelp/Yelp'
import Order from '@home/Order'
import Footer from '@home/Footer'
import Head from 'next/head'

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0.5 },
}
const Home = () => {
  return (
    <>
      <Head>
        <title>The Grind</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='The word game that tests your vocabulary knowledge.' />
      </Head>

      <main>
        <Hero />
        <About />
        <Yelp />
        <Order />
        <Footer />
      </main>
    </>
  )
}
export default Home
