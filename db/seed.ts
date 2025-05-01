import sampleData from "./sample-data";
import { prisma } from "@/db/prisma";

export async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: sampleData.products });
}

main();
console.log("Database seeded successfully");
