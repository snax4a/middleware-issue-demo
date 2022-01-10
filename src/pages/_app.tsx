import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function OfferExchange({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return <Component {...pageProps} />
}
