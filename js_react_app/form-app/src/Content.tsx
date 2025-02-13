import { employeesSlice } from "./store/employee.slice";
import { useAppSelector } from "./store";
import { memo } from "react";

const EmployeeRow = memo( function EmployeRow({
  employeeId 
} : {
  employeeId: number
}) {
    const employee = useAppSelector(state => employeesSlice.selectors.selectEmployee(state, employeeId));

    return(
      <tr>
        <td>{employee.name}</td>
        <td>{employee.birthDate.toDateString()}</td>
        <td>{employee.company.title}</td>
        <td>{employee.position.title}</td>
        <td>{employee.position.salary}</td>
      </tr>
    )
  });

function Content(){
    let employeeListIds = useAppSelector(employeesSlice.selectors.selectEmployeesIds);
    return (
        <table className='table-auto w-full mx-10 text-xl'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth Date</th>
              <th>Company</th>
              <th>Position</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            { employeeListIds.map( id => (
              <EmployeeRow employeeId={id} key={id} />
            )) }
          </tbody>
        </table>
    )
}

export default Content;