import { prisma } from "@/lib/prisma"


export async function GET(){
    const positions = await prisma.position.findMany();
    return Response.json({ positions });
}

export async function POST(request: Request){
    const { title, salary } = await request.json();

    const result = await prisma.position.create({
        data:{
            title: title,
            salary: parseInt(salary)
        }
    });

    return Response.json({ result });
}