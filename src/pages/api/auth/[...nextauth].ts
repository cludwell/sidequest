import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import NextAuth from 'next-auth/next'
import Providers from 'next-auth/providers';

export default NextAuth({
    session: {
        jwt: true,
    },
    providers: [
      // Add your authentication providers here
      Providers.Credentials({
        // The name to display on the sign-in form (e.g., 'Email')


        name: 'Credentials',
        credentials: {
            email: { label: 'Email', type: 'text' },
            password: { label: 'Password', type: 'password' }
        },
        authorize: async (credentials: string) => {
          // Add your custom login logic here
          // For example, use Prisma to validate the user's credentials
          const user = await prisma.users.findUnique({
            where: { email: credentials.email }
        });
          if (user && user.password === credentials.password) {
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
        }
      }),
      // Add other providers (e.g., Google, GitHub) as needed
      // Providers.Google({
      //   clientId: process.env.GOOGLE_CLIENT_ID,
      //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
      // }),
    ],
    // Add other configurations as needed
  });
