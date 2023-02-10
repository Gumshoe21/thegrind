import React from 'react'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Navbar from '@ui/Navbar'
import type { AppProps } from 'next/app'
import { wrapper } from '@store/index'
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router'

const App: React.FC<AppProps> = ({ Component, pageProps: { session, ...pageProps }, ...rest }: AppProps) => {
  const router = useRouter()
  const { store } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <Head>
        <title>The Grind</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='The word game that tests your vocabulary knowledge.' />
      </Head>

      <SessionProvider session={session}>
        { router.pathname !== '/profile' && <Navbar />}
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  )
}

export default App
