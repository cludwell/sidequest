import { PrismaClient, Users as PrismaUser } from "@prisma/client";
const prisma = new PrismaClient();
import NextAuth, { Account } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../../lib/auth";
import { store } from "@/store";
import { login, logout } from "../../../store/session";
import { User } from "../../../../lib/user";

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
        const userStringDates: User = {
          ...user,
          createdAt: user.createdAt.toISOString(),
          updatedAt: user.updatedAt.toISOString(),
        };
        try {
          await store.dispatch(login(userStringDates));
        } catch (error) {
          console.error("Error dispatching login action:", error);
        }
        return user;
      },
    }),
    // Add other providers (e.g., Google, GitHub) as needed
    // Providers.Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
    // }),
  ],
  callbacks: {
    // async jwt({ token, account, profile }) {
    //   if (account && 'email' in account) {
    //     const userEmail: string | undefined = (account as any).email;
    //     if (userEmail) {
    //       const user: PrismaUser | null = await prisma.users.findUnique({
    //         where: {
    //           email: userEmail,
    //         },
    //       });
    //       if (user !== null) {
    //         store.dispatch(login(user))
    //       }
    //     }
    //   } else {
    //     store.dispatch(logout());
    //   }
    //   return token
    // },
    jwt: async ({ token, user }) => {
      return Promise.resolve(token);
    },
    // session: async({ session, user }) => {
    //   session.user = user.user;
    //   return Promise.resolve(session)
    // }
  },
  // Add other configurations as needed
});
