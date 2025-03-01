import Form from "next/form";
import Link from "next/link";
import getCompany from "@/actions/companies/getCompany";
import putCompany from "@/actions/companies/putCompany";

export default async function CompanyEdit(
    { params }: { params: Promise<{ id: string}> }
){
    const { id } = await params;
    const { company } = await getCompany(id);
    return (
        <Form className="flex m-20 
                        justify-center 
                        content-center"
                action={ putCompany }>
            <input type="hidden" name="id" value={company.id}/>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Title company:</label>
                <input type="text"
                        defaultValue = { company.title }
                        name="title"/>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="submit">
                    Save Company
                </button>
                <Link href="/dashboard/companies">
                    Cancel
                </Link>
            </div>
        </Form>
    );
}