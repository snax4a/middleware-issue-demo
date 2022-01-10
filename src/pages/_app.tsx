import { AuthProvider } from '@lib/AuthProvider'
import { fetcher } from '@lib/helpers'
import type { AppProps } from 'next/app'
import { FC, useEffect } from 'react'
import { SWRConfig } from 'swr'

const swrConfig = {
  fetcher,
  shouldRetryOnError: false,
  revalidateOnFocus: false,
}

const Noop: FC = ({ children }) => <>{children}</>

export default function OfferExchange({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <SWRConfig value={swrConfig}>
        <AuthProvider>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </SWRConfig>
    </>
  )
}
