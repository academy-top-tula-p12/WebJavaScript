import { prisma } from "@/app/prisma_crud"

export async function POST(request: Request, response: Response){
    const { title } = await request.json();

    const result = await prisma.company.create({
        data:{
            title: title
        }
    });

    return Response.json({ result });
}

export async function DELETE(request: Request) {
    
}

export async function PUT(request: Request) {
    
}