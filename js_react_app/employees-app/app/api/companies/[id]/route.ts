import deleteCompany from "@/actions/companies/deleteCompany";
import { prisma } from "@/lib/prisma";


export async function DELETE(
    request: Request,
    { params }: { params: Promise<{id: string}>}
    ) {
    const { id } = await params;
    const companyDeleted = await prisma.company.delete({
        where:{
            id: parseInt(id)
        }
    });
    return Response.json(deleteCompany);
}

export async function GET(
    request: Request,
    { params } : { params: Promise<{ id: string }>}
){
    const { id } = await params;
    const company = await prisma.company.findUnique({
        where:{
            id: parseInt(id),
        }
    });

    return Response.json({ company });
}

export async function PUT(
    request: Request,
    { params } : { params: Promise<{ id: string }>}
){
    const { id } = await params;
    const { title } = await request.json();

    const company = await prisma.company.update({
        where:{
            id: parseInt(id),
        },
        data: {
            title: title,
        }
    });

    return Response.json({ company });
}