import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return;
const characters = prisma.characters.findMany({
    include: {
        users: true,
        userScenarios: true,
    }
})
}
