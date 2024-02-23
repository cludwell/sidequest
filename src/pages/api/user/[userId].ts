import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    let userId = req.query.userId;
    if (Array.isArray(userId)) {
      userId = userId[0];
    }
    if (!userId)
      return res.status(403).json({
        error: "Unauthorized",
      });
    const characters = await prisma.characters.findMany({
      where: {
        userId: parseInt(userId),
      },
      include: {
        userScenarios: true,
      },
    });
    return res.status(200).json({
      ...characters,
    });
  }
}
