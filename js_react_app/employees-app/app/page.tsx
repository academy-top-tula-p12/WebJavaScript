import Image from "next/image";
import { prisma } from "../lib/prisma";
import EmployeeItem from "../components/employee_item";
import { log } from "console";
import { Employee } from "@/prisma/types";

export default async function Home() {

  const employees = await prisma.employee.findMany({
    include: {
        company: true,
        position: true
      },
  });
  

  return (
    <div className="">
      {/* <main className="">
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
            { employees.map( (employee: Employee)  => (
              <tr>
                <EmployeeItem employee={ employee } key={employee.id} />
              </tr>
            )) }
          </tbody>
        </table>
      </main> */}
    </div>
  );
}
