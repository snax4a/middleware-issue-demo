import { isServer } from '@lib/helpers'
import create from 'zustand'
import { combine } from 'zustand/middleware'

const accessTokenKey = '@service-quotes/token'

const getDefaultValues = () => {
  if (!isServer) {
    try {
      return {
        accessToken: localStorage.getItem(accessTokenKey) || '',
      }
    } catch {}
  }

  return {
    accessToken: '',
  }
}

export const useTokenStore = create(
  combine(getDefaultValues(), (set) => ({
    setTokens: (x: { accessToken: string }) => {
      try {
        localStorage.setItem(accessTokenKey, x.accessToken)
      } catch {}

      set(x)
    },
  }))
)
