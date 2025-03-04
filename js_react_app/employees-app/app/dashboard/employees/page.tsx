import Link from "next/link";
import Form from "next/form";
import { Employee } from "@/prisma/types";
import getEmployees from "@/actions/employees/getEmployees";
import deleteEmployee from "@/actions/employees/deleteEmployee";


function EmployeeDashboardItem(
    { employee }: { employee : Employee } ) { 
        return (
            <tr>
                <td>{ employee.name }</td>
                <td>{ employee.birthDate.slice(0, 10) }</td>
                <td>{ employee.company.title }</td>
                <td>{ employee.position.title }</td>
                <td>{ employee.position.salary }</td>
                <td>
                    <Link href={`/dashboard/employees/${employee.id}`}>
                        Edit
                    </Link>
                </td>
                <td>
                    <Form action={ deleteEmployee }>
                        <input type="hidden" name="id" value={employee.id}/>
                        <button type="submit">
                            Delete
                        </button>    
                    </Form>
                    
                </td>
            </tr>
        );
    };

export default async function EmployeesDashboard(){
    
    const { employees } = await getEmployees();

    return (
        <>
            <h2>Employees dashboard</h2>
            <div>
                <Link href="/dashboard/employees/create">
                    Create Employee
                </Link>
            </div>
            <table className='table-auto w-full mx-10 text-xl'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { employees.map( (employee: Employee) => (
                        <EmployeeDashboardItem employee={employee} key={employee.id} />
                    )) }
                </tbody>
            </table>
        </>
    );
}
