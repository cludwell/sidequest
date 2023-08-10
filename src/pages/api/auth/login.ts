import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { compare } from "bcryptjs";
import { Console } from "console";
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;
  const { email, password } = req.body;
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 6
  ) {
    return res.status(422).json({
      message:
        "Invalid input - make sure password is at least 6 characters and/or be sure to include a valid email address",
    });
  }
  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  if (!user)
    return res.status(404).json({
      message: "No user found with that email.",
    });
  const passwordsMatch: boolean = await compare(password, user.hashedPassword);
  if (passwordsMatch){
  return res.status(201).json({
    id: user.id,
    username: user.username,
    email: user.email,
    profilePic: user.profilePic,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
   });
}
  else
    return res.status(404).json({
      message: "Password did not match records.",
    });
}
