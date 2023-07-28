import { PrismaClient, users as PrismaUser } from "@prisma/client";
const prisma = new PrismaClient();
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { hashPassword, verifyPassword } from "../../../../lib/auth";
import { compare } from "bcryptjs";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
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
        console.log('CREDENTIALS DOT PASSWORD', credentials.password, user.hashed_password)
        const isValid = await verifyPassword(
          credentials.password,
          user.hashed_password
        );
        // console.log('HASHING THE USERS PASSWORD', await compare('password', '$2a$12$nBC5YiXYXnGIqcrjAMq5WuwzBvg6lRg.FYZPI1ANuCgZiG3zqnO/C'))
        console.log('IS VALID----------------------', isValid)
        if (!isValid) throw new Error("Password doesnt match!");
        console.log("==================SUCCESS");
        return user;
      },
    }),
    // Add other providers (e.g., Google, GitHub) as needed
    // Providers.Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
    // }),
  ],
  // Add other configurations as needed
});
