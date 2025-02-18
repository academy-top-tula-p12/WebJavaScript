import { memo } from "react";
import { useEmployeeData } from "@/hooks/useEmployeeData";


const EmployeeItem = memo(function EmployeeItem({
    employeeId
}: {
    employeeId: number
}){
    const employee = useEmployeeData(employeeId);

    return (
        <>
            <td>{employee.name}</td>
            <td>{employee.birthDate.day}.{employee.birthDate.month}.{employee.birthDate.year}</td>
            <td>{employee.company}</td>
            <td>{employee.position}</td>
            <td>{employee.salary}</td>
        </>
    );
});

export default EmployeeItem;