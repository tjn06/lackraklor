import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

import { ThemeProvider } from 'styled-components';
import theme from "../theme/theme"

import Layout from '../comps/Layout'

const GlobalStyles = createGlobalStyle`
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={theme}>
  <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
  )
}

export default MyApp
