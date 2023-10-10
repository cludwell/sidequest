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
        action: { label: "Action", type: "text" },
        username: { label: "Username", type: "text" },
        profilePic: { label: "ProfilePic", type: "text" },
      },

      // trying to assign a specific type to the authorize promise results in an error
      authorize: async (credentials, req): Promise<any> => {
        console.log('ENTERING THE ROUTE', credentials)
        if (credentials && credentials.action === "signup") {
          console.log('ENTERING SIGNUP')
          const existingEmail = await prisma.users.findUnique({
            where: { email: credentials.email },
          });

          const existingUser = await prisma.users.findFirst({
            where: { username: credentials.username },
          });
          if (existingUser || existingEmail)
            throw new Error("User already exists");

          // Hash the password and save the new user in your database
          const hashedPassword = await hashPassword(credentials.password);
          const newUser = await prisma.users.create({
            data: {
              email: credentials.email,
              hashedPassword: hashedPassword,
              username: credentials.username,
              profilePic: credentials.profilePic
            },
          });
          console.log('NEW USER', newUser)
          return newUser;
        }
        if (!credentials || !credentials.email || !credentials.password)
          throw new Error("Invalid Credentials");
        const user = await prisma.users.findUnique({
          where: { email: credentials.email },
        });
        if (!user) throw new Error("No user found");
        // console.log("USER", user);
        const isValid = await verifyPassword(
          credentials.password,
          user.hashedPassword
        );
        if (!isValid) throw new Error("Password doesnt match");

        return user;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        // token.picture = user.profilePic;
        // token.username = user.username;
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
