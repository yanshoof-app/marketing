import { GetStaticProps } from 'next'
import Head from 'next/head'
import { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'
import { Wrapper } from './types'

const previewImagePath = '/og_image.png'
const defaultDescription = 'מערכת השעות. עם השיעורים שלכם.'

export interface IDocumentHeadProps extends Wrapper {
  pageTitle?: string
  previewImage?: string
  description?: string
}

export default function DocumentHead({
  pageTitle,
  previewImage = previewImagePath,
  description = defaultDescription,
  children,
}: IDocumentHeadProps) {
  const router = useRouter()
  const currentURL = router.pathname
  const siteName = 'Yanshoof'

  return (
    <>
      {pageTitle && (
        <Head>
          <title>{pageTitle}</title>
          <meta property="og:url" content={currentURL} key="ogurl" />
          <meta property="og:image" content={previewImage} key="ogimage" />
          <meta property="og:site_name" content={siteName} key="ogsitename" />
          <meta property="og:title" content={pageTitle} key="ogtitle" />
          <meta property="og:description" content={description} key="ogdesc" />
        </Head>
      )}
      {children}
    </>
  )
}

export function buildTitleGetStaticProps(title: string): GetStaticProps {
  return () => ({
    props: {
      title,
    },
  })
}
