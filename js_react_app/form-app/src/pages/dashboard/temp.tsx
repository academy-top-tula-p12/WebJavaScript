import { useAppSelector, useAppDispatch } from "./store";
import { employeesSlice } from "./store/employee.slice";
import { memo } from "react";
import { companies, positions } from "./Data";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";




export default function Dashboard(){
    const employeeIds = useAppSelector(employeesSlice.selectors.selectEmployeesIds);
    const selectedId = useAppSelector(employeesSlice.selectors.selectSelectedEmployeeId);

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
              {/* <th>Birth Date</th> */}
              <th>Company</th>
              <th>Position</th>
              <th>Salary</th>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {
                employeeIds.map( id => <EmployeeItem employeeId={id} key={id}/>)
            }
          </tbody>
        </table>
        </>
    );
}
