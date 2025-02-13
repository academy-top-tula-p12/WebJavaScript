import { useAppSelector, useAppDispatch } from "./store";
import { employeesSlice } from "./store/employee.slice";
import { memo } from "react";
import { companies, positions } from "./Data";
import AddEmployee from "./AddEmployee";

const EmployeeItem = memo(function EmployeeItem({
    employeeId
}: {
    employeeId: number
}){
    const dispatch = useAppDispatch();
    const employee = useAppSelector(state => employeesSlice.selectors.selectEmployee(state, employeeId));

    return (
        <tr>
        <td>{employee.name}</td>
        <td>{employee.birthDate.toDateString()}</td>
        <td>{employee.company.title}</td>
        <td>{employee.position.title}</td>
        <td>{employee.position.salary}</td>
        <td>
            <button
                onClick={() => dispatch(employeesSlice.actions
                                                      .select({employeeId}))}>
                Edit
            </button>
        </td>
        <td>
            <button
                onClick={() => dispatch(employeesSlice.actions
                                                        .delete({employeeId}))}>
                Delete
            </button>
        </td>
      </tr>
    );
});


export default function Dashboard(){
    const employeeIds = useAppSelector(employeesSlice.selectors.selectEmployeesIds);
    const selectedId = useAppSelector(employeesSlice.selectors.selectSelectedEmployeeId);

    return (
        <>
        <div>
            <AddEmployee />
        </div>
        <table className='table-auto w-full mx-10 text-xl'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth Date</th>
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
