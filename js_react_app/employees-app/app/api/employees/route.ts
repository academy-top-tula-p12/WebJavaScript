import { prisma } from "@/lib/prisma"

export async function GET(){
    const employees = await prisma.employee.findMany({
        include:{
            company:{
                select: { title: true },
            },
            position:{
                select:{
                    title: true,
                    salary: true
                }
            }
        }
    });
    return Response.json({ employees });
}

export async function POST(request: Request){
    const employeeJson = await request.json();

    const result = await prisma.employee.create({
        data:{
            ...employeeJson
        }
    });

    return Response.json({ result });
}