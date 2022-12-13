import '../styles/globals.css'
import 'tailwindcss/tailwind.css';

import Head from 'next/head'
import Navbar from '../src/components/ui/Navbar'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
