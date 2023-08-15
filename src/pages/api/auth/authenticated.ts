import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { PrismaClient, Users as PrismaUser } from "@prisma/client";
import { token } from "../../../../lib/token";
const prisma = new PrismaClient();

export default async function authenticatedHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return;
  const token = (await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  })) as token;
  // console.log('===========================', token)
  if (!token) return null;
  const userId = parseInt(token.sub);
  const user = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });
  if (user) {
    // console.log('=====================', user)
    return res.status(201).json({
      id: user.id,
      username: user.username,
      email: user.email,
      profilePic: user.profilePic,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  }
}
