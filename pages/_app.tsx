import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FooterWrapper } from '../components/ui/Footer/FooterWrapper'
import ThemeProvider from '../components/ThemeProvider'
import RefsProvider from '../components/RefsProvider'
import DocumentHead from '../components/DocumentHead'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DocumentHead pageTitle={pageProps.title}>
      <RefsProvider>
        <ThemeProvider>
          <FooterWrapper>
            <Component {...pageProps} />
          </FooterWrapper>
        </ThemeProvider>
      </RefsProvider>
    </DocumentHead>
  )
}

export default MyApp
