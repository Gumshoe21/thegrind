import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Navbar from '../src/components/ui/Navbar'
import type { AppProps } from 'next/app'
import { wrapper } from '@store/index'
import { Provider } from 'react-redux'

const App: FC<AppProps> = ({ Component, pageProps,...rest }: AppProps) => {
  const { store } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <Head>
        <title>The Grind</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='The word game that tests your vocabulary knowledge.' />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
