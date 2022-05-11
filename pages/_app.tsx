import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/ui/Footer'
import { FooterWrapper } from '../components/ui/Footer/FooterWrapper'
import ThemeProvider from '../components/ThemeProvider'
import RefsProvider from '../components/RefsProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RefsProvider>
      <ThemeProvider>
        <FooterWrapper>
          <Component {...pageProps} />
        </FooterWrapper>
      </ThemeProvider>
    </RefsProvider>
  )
}

export default MyApp
