import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/ui/Footer'
import { FooterWrapper } from '../components/ui/Footer/FooterWrapper'
import ThemeProvider from '../components/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <FooterWrapper>
        <Component {...pageProps} />
      </FooterWrapper>
    </ThemeProvider>
  )
}

export default MyApp
