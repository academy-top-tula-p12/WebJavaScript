import { employeesSlice } from "@/store/employee.slice";
import { useAppSelector } from "@/store";
import EmployeeItem from "@/components/EmployeeItem";

function Content(){
    let employeeListIds = useAppSelector(employeesSlice.selectors.selectEmployeesIds);
    return (
        <table className='table-auto w-full mx-10 text-xl'>
          <thead>
            <tr>
              <th>Name</th>
              {/* <th>Birth Date</th> */}
              <th>Company</th>
              <th>Position</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            { employeeListIds.map( id => (
              <tr>
                <EmployeeItem employeeId={id} key={id} />
              </tr>
            )) }
          </tbody>
        </table>
    )
}

export default Content;