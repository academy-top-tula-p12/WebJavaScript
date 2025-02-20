import { employeesSlice } from "@/store/employee.slice";
import { useAppSelector, useAppDispatch } from "@/store";
import { memo } from "react";
import EmployeeItem from "@/components/EmployeeItem";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";

const EmployeesDashboardItem = memo(function EmployeesDashboardItem(
    { employeeId } : { employeeId: number }
){
    const dispatch = useAppDispatch();
    return (
        <tr>
            <EmployeeItem employeeId={employeeId} />
            <td>
                <button type="button"
                        onClick={() => dispatch(employeesSlice.actions.select({ employeeId }))}>
                    Edit
                </button>
            </td>
            <td>
                <button type="button"
                        onClick={() => dispatch(employeesSlice.actions.delete({ employeeId }))}>
                    Delete
                </button>
            </td>
        </tr>
    );
});

export default function EmployeesDashboard(){
    const employeeIds = useAppSelector(employeesSlice.selectors.selectEmployeesIds);
    const selectedId = useAppSelector(employeesSlice.selectors.selectSelectedEmployeeId)
    return (
        <>
            <div>
                {(selectedId === undefined) ? 
                    <AddEmployee /> 
                    : <EditEmployee employeeId={selectedId} />}
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
                    { employeeIds.map( id => (
                        <EmployeesDashboardItem employeeId={id} key={id} />
                    )) }
                </tbody>
            </table>

        </>
    );
}