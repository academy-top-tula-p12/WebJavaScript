import Form from "next/form";
import Link from "next/link";
import postEmployee from "@/actions/employees/postEmployee";
import CompaniesList from "../components/comanieslist";
import PositionsList from "../components/positionslist";
import getEmployee from "@/actions/employees/getEmployee";
import putEmployee from "@/actions/employees/putEmployee";

export default async function EmployeeEdit(
    { params }: { params: Promise<{ id: string}> }
){
    
    const { id } = await params;
    const { employee } = await getEmployee(id);

    return (
        <Form className="flex m-20 
                        justify-center 
                        content-center"
                action={ putEmployee }>
            <input type="hidden" name="id" value={ employee.id }/>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Name:</label>
                <input type="text"
                        defaultValue={ employee.name }
                        name="name"/>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Birth Date:</label>
                <input type="date"
                        defaultValue={ employee.birthDate.slice(0, 10) }
                        name="birthDate"/>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Company:</label>
                <CompaniesList selectedCompanyId={ employee.companyId } />
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Position:</label>
                <PositionsList selectedPositionId={ employee.positionId } />
            </div>


            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="submit">
                    Save Employee
                </button>
                <Link href="/dashboard/employees">
                    Cancel
                </Link>
            </div>
        </Form>
    );
}