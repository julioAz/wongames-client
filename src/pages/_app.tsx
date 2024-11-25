import Head from 'next/head'

import GlobalStyles from '@/styles/global'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title> React Avançado - Boilerplate</title>
      <link rel="stylesheet" href="shortcut" />
    </Head>
    </>
  )
}
