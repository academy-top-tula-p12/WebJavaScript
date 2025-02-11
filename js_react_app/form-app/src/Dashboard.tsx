import { employees, companies, position } from './Data';
import { Employee, Company, Position } from './Models';
import { useState } from 'react';





function EmployeeForm(){

    
    const [birthDate, setBirthDate] = useState<Date>();
    const [company, setCompany] = useState();
    const [position, setPosition] = useState();
    const [salary, setSalary] = useState();

    function handleAdd(e: any){
        e.preventDefault();
        let bd = new Date()
        console.log(birthDate);
    }

    return (
        <form className="flex-col w-10/12 mb-10 mx-10 border-1 border-black">
                <input type="hidden" name="id" />
                <div className="flex m-10">
                    <div className="mx-10">
                        <label className="inline-block mr-5">Name</label>
                        <input type="text" 
                               value={name}
                               className="border-1 border-black"
                               onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="mx-10">
                        <label className="inline-block mr-5">Birth Date</label>
                        <input type="date"
                                value={birthDate}
                                className="border-1 border-black"
                                onChange={e => setBirthDate(e.target.value)}/>
                    </div>
                </div>
                <div className="flex m-10">
                    <div className="mx-10">
                        <label className="inline-block mr-5">Company</label>
                        <select name="company" className="border-1 border-black">
                            <option>Yandex</option>
                            <option>Mail</option>
                        </select>
                    </div>
                    <div className="mx-10">
                        <label className="inline-block mr-5">Position</label>
                        <select name="position" className="border-1 border-black">
                            <option>Developer</option>
                            <option>Tester</option>
                        </select>
                    </div>
                    <div className="mx-10">
                        <label className="inline-block mr-5">Salary</label>
                        <input type="number" name="salary" className="border-1 border-black" />
                    </div>
                </div>
                <div className="m-10">
                    <button onClick={handleAdd}>Add</button>
                </div>
            </form>
    );
}


function CompanySelect(){

}

function PositionSelect(){

}

function EmployeeRow({ employee }: {employee: Employee}){
    return(
      <tr className='border-1 border-gray'>
        <td className='p-5'>{employee.name}</td>
        <td>{employee.birthDate.toDateString()}</td>
        <td>{employee.company.title}</td>
        <td>{employee.position.title}</td>
        <td>{employee.position.salary}</td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
      </tr>
    )
  }

function Dashboard(){
    let employeeList = employees;
    return (
        <div className="">
            <h1 className="mb-10">Employees dashboard editor:</h1>
            <EmployeeForm />
            <table className='table w-10/12 mx-10 text-xl border border-solid'>
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
                { employeeList.map((e, index) => <EmployeeRow employee={e} key={index}/>) }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard;