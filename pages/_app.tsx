import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import 'tailwindcss/tailwind.css';
import Head from 'next/head'
import Navbar from '../src/components/ui/Navbar'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>

<Head>
          <title>The Grind</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="The word game that tests your vocabulary knowledge." />
        </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
