import { prisma } from "@/app/prisma_crud";
import CompanyAdd from "./components/companyadd";
import Link from "next/link";
import { FormEvent } from "react";

function CompanyDashboardItem(
    { company } : { company: {
        id: number,
        title: string
    }}){

        const deleteHandler = async(e: FormEvent) => {
            e.preventDefault();
            //
        }
        
        return (
            <tr>
                <td>{ company.title }</td>
                <td>
                    <Link href={`/dasboard/companies/${company.id}`}>
                        Edit
                    </Link>
                </td>
                <td>
                    <form onSubmit={deleteHandler}>
                        <input type="hidden" name="id" value={company.id}/>
                        <button type="button">
                            Delete
                        </button>    
                    </form>
                    
                </td>
            </tr>
        );
    };

export default async function CompaniesDashboard(){
    const companies = await prisma.company.findMany();

    return (
        <>
            <div>
                {
                    <CompanyAdd />
                }
            </div>
            <table className='table-auto w-full mx-10 text-xl'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { companies.map( company => (
                        <CompanyDashboardItem company={company} key={company.id} />
                    )) }
                </tbody>
            </table>
        </>
    );
}
