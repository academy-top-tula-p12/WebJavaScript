import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const employees = await prisma.employee.findMany({
    include: {
        company: true,
        position: true
      },
});

export const companies = await prisma.company.findMany();


