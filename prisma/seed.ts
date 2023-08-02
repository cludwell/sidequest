const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
import { usersData } from "./userSeeds"; // Update the path accordingly
import { userScenarioData } from "./userScenarioSeeds";
async function seedUsers() {
  try {
    await prisma.user.createMany({
      data: usersData, // Use the imported user data array
    });
    console.log("Users seeded successfully");
  } catch (error) {
    console.error("Error seeding users:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedUserScenarios() {
  try {
    await prisma.userScenario.createMany({
      data: userScenarioData,
    });
    console.log("User scenarios seeded successfully");
  } catch (error) {
    console.error("Error seeding user scenarios:", error);
  } finally {
    await prisma.$disconnect();
  }
}
// Call the seedUsers function to start seeding
seedUsers();
seedUserScenarios();
