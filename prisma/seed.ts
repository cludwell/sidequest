const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
import { usersData } from "./_userSeeds"; // Update the path accordingly
import { userScenariosData } from "./_userScenarioSeeds";
import { scenariosData } from "./_scenarioSeeds";
import { charactersData } from "./_characterSeeds";
async function seedUsers() {
  try {
    await prisma.users.createMany({
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
    await prisma.userScenarios.createMany({
      data: userScenariosData,
    });
    console.log("User scenarios seeded successfully");
  } catch (error) {
    console.error("Error seeding user scenarios:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedScenarios() {
  try {
    await prisma.scenarios.createMany({
      data: scenariosData,
    });
    console.log("Scenarios seeded successfully");
  } catch (error) {
    console.error("Error seeding scenarios:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedCharacters() {
  try {
    await prisma.characters.createMany({
      data: charactersData,
    });
    console.log("Characters seeded successfully");
  } catch (error) {
    console.error("Error seeding characters:", error);
  } finally {
    await prisma.$disconnect();
  }
}
// Call the seedUsers function to start seeding
seedUsers();
seedUserScenarios();
seedScenarios();
seedCharacters();
