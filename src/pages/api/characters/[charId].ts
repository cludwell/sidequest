import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("WE ARE IN THE ROUTE");
  if (req.method === "DELETE") {
    try {
      const charId = parseInt(req.query.charId as string, 10);
      // console.log("WE ARE ENTERING THE DELETE ROUTE", charId);

      if (!charId || typeof charId !== "number") {
        return res.status(400).json({ error: "Invalid character ID" });
      } else if (charId <= 8) {
        return res
          .status(403)
          .json({ error: "Deleting this resource is not allowed" });
      }

      const character = await prisma.characters.delete({
        where: {
          id: charId,
        },
      });
      if (character) {
        console.log("CHARACTER BACKEND", character);
        return res.status(200).json(character);
      }
    } catch (error) {
      console.error("Error removing character from database: ", error);
      return res.status(500).json({
        error: "An error occurred while removing character from database",
      });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
