'use client'

import { Nav } from '@/components/Nav'
import { signIn, useSession } from 'next-auth/react'
import { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            className="bg-white p-2 px-4 rounded-lg text-black"
            onClick={() => signIn('google')}
          >
            Login with Google
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-blue-900 min-h-screen text-black flex">
      <Nav />
      <div className="bg-white grow mt-2 mr-2 rounded-lg p-4 mb-0">
        {children}
      </div>
    </div>
  )
}
