import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const scenarios = await prisma.scenarios.findMany({});
      return res.status(200).json({ ...scenarios });
    } catch (error) {
      console.error("Error fetching characters:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching scenarios" });
    }
  }
}
