import NextAuth from 'next-auth/next'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId:
        process.env.GOOGLE_ID ??
        '345599268351-dusgt9o8eeg166m6hfasn4n5r68a7kv6.apps.googleusercontent.com',
      clientSecret:
        process.env.GOOGLE_SECRET ?? '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',
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
