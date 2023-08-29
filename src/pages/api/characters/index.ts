import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const characters = await prisma.characters.findMany({
        include: {
          userScenarios: true,
          users: true,
          // scenarios: true,
        },
      });
      const payload = {};
      for (const character of characters) {
        payload[character.id] = character;
      }
      return res.status(200).json({ ...payload });
    } catch (error) {
      console.error("Error fetching characters:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching characters" });
    }
  }
}
