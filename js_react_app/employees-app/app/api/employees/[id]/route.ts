import { prisma } from "@/lib/prisma";


export async function DELETE(
    request: Request,
    { params }: { params: Promise<{id: string}>}
    ) {
    const { id } = await params;
    const employeeDeleted = await prisma.employee.delete({
        where:{
            id: parseInt(id)
        }
    });
    return Response.json(employeeDeleted);
}

export async function GET(
    request: Request,
    { params } : { params: Promise<{ id: string }>}
){
    const { id } = await params;
    const employee = await prisma.employee.findUnique({
        where:{
            id: parseInt(id),
        }
    });

    return Response.json({ employee });
}

export async function PUT(
    request: Request,
    { params } : { params: Promise<{ id: string }>}
){
    const { id } = await params;
    const employeeJson = await request.json();

    const employee = await prisma.employee.update({
        where:{
            id: parseInt(id),
        },
        data: {
            ...employeeJson
        }
    });

    return Response.json({ employee });
}