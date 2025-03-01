import { prisma } from "@/lib/prisma"


export async function GET(){
    const companies = await prisma.company.findMany();
    return Response.json({ companies });
}

export async function POST(request: Request){
    const { title } = await request.json();

    const result = await prisma.company.create({
        data:{
            title: title
        }
    });

    return Response.json({ result });
}