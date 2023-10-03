import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const charData = req.body;
      const {userId} = charData;

      if (!userId) {
        return res.status(400).json({ error: "User is not authenticated" });
      }
      const character = await prisma.characters.create({
        data: { ...charData },
      });
      // console.log('WE ARE ENTERING THE ROUTE', character)
      if (character) {
        console.log("CHARACTER BACKEND", character);
        return res.status(200).json(character);
      }
    } catch (error) {
      console.error("Error adding character to database: ", error);
      return res.status(500).json({
        error: "An error occurred while adding character to database",
      });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
