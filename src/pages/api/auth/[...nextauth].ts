import { PrismaClient, Users as PrismaUser } from "@prisma/client";
const prisma = new PrismaClient();
import NextAuth, { Account } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { hashPassword, verifyPassword } from "../../../../lib/auth";
import { CustomSession } from "../../../../lib/customUser";


export default NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    // Add your authentication providers here
    CredentialsProvider({
      // The name to display on the sign-in form (e.g., 'Email')
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      // trying to assign a specific type to the authorize promise results in an error
      authorize: async (credentials, req): Promise<any> => {
        if (!credentials || !credentials.email || !credentials.password)
          throw new Error("Invalid Credentials");
        const user = await prisma.users.findUnique({
          where: { email: credentials.email },

        });
        if (!user) throw new Error("No user found!");
        console.log('USER', user)
        const isValid = await verifyPassword(
          credentials.password,
          user.hashedPassword
        );
        if (!isValid) throw new Error("Password doesnt match!");

        return user;
      },
    }),
   ],
   callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.picture = user.profilePic;
        token.username = user.username;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session && session.user) {
        // session.user.id = token.id;
        session.user.image = token.picture;
      }
      return session;
    },
  },

  // Add other configurations as needed
});
