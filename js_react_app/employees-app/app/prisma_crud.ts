import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const employees = await prisma.employee.findMany({
    include: {
        company: true,
        position: true
      },
});


