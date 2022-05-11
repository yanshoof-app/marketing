import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/ui/Footer'
import { FooterWrapper } from '../components/ui/Footer/FooterWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FooterWrapper>
      <Component {...pageProps} />
    </FooterWrapper>
  )
}

export default MyApp
