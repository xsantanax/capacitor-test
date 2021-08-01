import Head from 'next/head'
import GlobalStyles from 'styles/global'
import { AppProps } from 'next/app'
import { Normalize } from 'styled-normalize'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import Layout from 'components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <Head>
        <title>Politik</title>
        <link rel="shortcut icon" href="/politik-logo.png" />
        <link rel="apple-touch-icon" href="/politik-logo.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
