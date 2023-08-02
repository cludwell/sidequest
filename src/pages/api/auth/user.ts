import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, users as PrismaUser } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession();
  if (!session || !session.user) {
    return res.status(401).json({
      user: null,
    });
  }

  const userEmail = session.user.email;
  if (!userEmail) {
    return res.status(400).json({
      error: "Email not provided in session",
    });
  }
  console.log('USER EMAIL=======================', userEmail)
  let user: PrismaUser | null = null;

  try {
    if (userEmail) {
      user = await prisma.users.findUnique({
        where: {
          email: userEmail,
        },
      });
    }
    console.log('USER===========================', user)
    if (!user) {
      return res.status(404).json({
        user: null,
      });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error("Error fetching user data:", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}
