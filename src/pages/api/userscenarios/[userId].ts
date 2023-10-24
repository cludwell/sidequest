import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userIdParam = req.query.userId;
  const userId: number | undefined =
    typeof userIdParam === "string" && userIdParam !== ""
      ? parseInt(userIdParam)
      : undefined;
  if (req.method === "GET" && userId) {
    try {
      // await prisma.$connect();
      const userScenarios = await prisma.userScenarios.findMany({
        where: {
          userId: userId
        },
        include: {
          characters: true,
          // users: true,
          scenarios: true,
        },
      });
      console.log("ENTERING ROUTE", userScenarios);
      return res.status(200).json({ ...userScenarios });
    } catch (error) {
      console.error("Error fetching characters:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching scenarios" });
    }finally {
      await prisma.$disconnect();
    }
  }
}
