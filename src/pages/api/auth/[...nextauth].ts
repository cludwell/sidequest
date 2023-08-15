import { PrismaClient, Users as PrismaUser } from "@prisma/client";
const prisma = new PrismaClient();
import NextAuth, { Account } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { hashPassword, verifyPassword } from "../../../../lib/auth";
import { redirect } from "next/dist/server/api-utils";
import Email from "next-auth/providers/email";

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
        const isValid = await verifyPassword(
          credentials.password,
          user.hashedPassword
        );
        if (!isValid) throw new Error("Password doesnt match!");

        return user;
      },
    }),

    // CredentialsProvider({
    //   name: "Signup",
    //   credentials: {
    //     email: { label: "Email", type: "text" },
    //     password: { label: "Password", type: "password" },
    //     username: { label: "Username", type: "text" },
    //     profilePic: { label: "ProfilePic", type: "text" },
    //   },
    //   authorize: async (credentials, req): Promise<any> => {
    //     if (
    //       !credentials ||
    //       !credentials.email ||
    //       !credentials.email.includes("@") ||
    //       !credentials.password ||
    //       credentials.password.trim().length < 6
    //     ) {
    //       throw new Error("Invalid data");
    //     }

    //     const existingEmail = await prisma.users.findUnique({
    //       where: { email: credentials.email },
    //     });
    //     const existingUsername = await prisma.users.findUnique({
    //       where: { username: credentials.username },
    //     });

    //     if (existingEmail) throw new Error("User with email already exists.");
    //     if (existingUsername)
    //       throw new Error("User with username already exists.");
    //     const hashedPassword: string = await hashPassword(credentials.password);
    //     const createUser = await prisma.users.create({
    //       data: {
    //         username: credentials.username,
    //         hashedPassword: hashedPassword,
    //         email: credentials.email,
    //         profilePic: credentials.profilePic,
    //       },
    //     });
    //     return createUser
    //   },
    // }),

    // Add other providers (e.g., Google, GitHub) as needed
    // Providers.Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
    // }),
   ],
  callbacks: {
    jwt: async ({ token, user }) => {
      return Promise.resolve(token);
    },
  },
  // Add other configurations as needed
});
