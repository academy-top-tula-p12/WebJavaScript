import Link from "next/link";
import Form from "next/form";
import { FormEvent } from "react";
import { Company } from "@/prisma/types";
import getCompanies from "@/actions/companies/getCompanies";
import deleteCompany from "@/actions/companies/deleteCompany";

function CompanyDashboardItem(
    { company }: { company : Company } ) { 
        return (
            <tr>
                <td>{ company.title }</td>
                <td>
                    <Link href={`/dashboard/companies/${company.id}`}>
                        Edit
                    </Link>
                </td>
                <td>
                    <Form action={ deleteCompany }>
                        <input type="hidden" name="id" value={company.id}/>
                        <button type="submit">
                            Delete
                        </button>    
                    </Form>
                    
                </td>
            </tr>
        );
    };

export default async function CompaniesDashboard(){
    
    const { companies } = await getCompanies();

    return (
        <>
            <h2>Company dashboard</h2>
            <div>
                <Link href="/dashboard/companies/create">
                    Create Company
                </Link>
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
                    { companies.map( (company: Company) => (
                        <CompanyDashboardItem company={company} key={company.id} />
                    )) }
                </tbody>
            </table>
        </>
    );
}
