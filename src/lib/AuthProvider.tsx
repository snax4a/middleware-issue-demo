import { useRouter } from 'next/router'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { User } from 'types'
import { useTokenStore } from './useTokenStore'

interface AuthProviderProps {}

export const AuthContext = React.createContext<{
  user: User | null
  setUser: (u: User) => void
}>({
  user: null,
  setUser: () => {},
})

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const hasToken = useTokenStore((s) => !!s.accessToken)
  const [user, setUser] = useState<User | null>(null)
  const isFetching = useRef(false)
  const { replace } = useRouter()

  useEffect(() => {
    setUser({
      id: 'mocked',
      firstName: 'John',
      lastName: 'Doe',
      role: 'default',
      email: 'test@test.com',
      companyName: 'test',
      image:
        'https://ui-avatars.com/api/?name=Szymon%20Sus&background=6C5DD3&bold=true&color=FFFFFF',
    })
  }, [hasToken, replace])

  return (
    <AuthContext.Provider
      value={useMemo(
        () => ({
          user,
          setUser,
        }),
        [user]
      )}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}
