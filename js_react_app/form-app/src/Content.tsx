import { employees, companies, position } from './Data';
import { Employee, Company, Position } from './Models';

function EmployeeRow({ employee }: {employee: Employee}){
    return(
      <tr>
        <td>{employee.name}</td>
        <td>{employee.birthDate.toDateString()}</td>
        <td>{employee.company.title}</td>
        <td>{employee.position.title}</td>
        <td>{employee.position.salary}</td>
      </tr>
    )
  }

function Content(){
    let employeeList = employees;
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
        { employeeList.map((e, index) => <EmployeeRow employee={e} key={index}/>) }
      </tbody>
    </table>
    )
}

export default Content;