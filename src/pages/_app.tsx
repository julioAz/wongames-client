import Head from 'next/head'

import GlobalStyles from '@/styles/global'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title> React Avançado - Boilerplate</title>
        <link rel="stylesheet" href="shortcut" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
