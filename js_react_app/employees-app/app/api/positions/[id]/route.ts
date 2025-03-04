import { prisma } from "@/lib/prisma";


export async function DELETE(
    request: Request,
    { params }: { params: Promise<{id: string}>}
    ) {
    const { id } = await params;
    const positionDeleted = await prisma.position.delete({
        where:{
            id: parseInt(id)
        }
    });
    return Response.json(positionDeleted);
}

export async function GET(
    request: Request,
    { params } : { params: Promise<{ id: string }>}
){
    const { id } = await params;
    const position = await prisma.position.findUnique({
        where:{
            id: parseInt(id),
        }
    });

    return Response.json({ position });
}

export async function PUT(
    request: Request,
    { params } : { params: Promise<{ id: string }>}
){
    const { id } = await params;
    const { title, salary } = await request.json();

    const position = await prisma.position.update({
        where:{
            id: parseInt(id),
        },
        data: {
            title: title,
            salary: parseInt(salary)
        }
    });

    return Response.json({ position });
}