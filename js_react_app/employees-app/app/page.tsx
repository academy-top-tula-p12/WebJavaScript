import Image from "next/image";
import { employees } from "./prisma_crud";
import EmployeeItem from "../components/employee_item";
import { log } from "console";

export default function Home() {

  console.log(employees);

  return (
    <div className="">
      <main className="">
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
            { employees.map( employee => (
              <tr>
                <EmployeeItem employee= {employee} key={employee.id} />
              </tr>
            )) }
          </tbody>
        </table>
      </main>
    </div>
  );
}
