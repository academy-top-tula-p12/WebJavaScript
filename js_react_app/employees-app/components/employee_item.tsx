import { Company, Employee } from "@/prisma/types";


function EmployeeItem( employee: Employee )
{
    return (
        <>
            <td>{employee.name}</td>
            <td>{employee.birthDate.getDate()}.{employee.birthDate.getMonth()}.{employee.birthDate.getFullYear()}</td>
            <td>{employee.company.title}</td>
            <td>{employee.position.title}</td>
            <td>{employee.position.salary}</td>
        </>
    );
};

export default EmployeeItem;