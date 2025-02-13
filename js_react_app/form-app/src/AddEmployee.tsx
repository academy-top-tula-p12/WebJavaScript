import { memo, useState } from "react";
import { useAppDispatch } from "./store";
import { employeesSlice } from "./store/employee.slice";
import { companies, positions } from "./Data";
import { Company, Position } from "./Models";



function CompanyItem( { company } : {
    company: Company
}){
    return (
        <option value={company.id}>{company.title}</option>
    )
}

function PositionItem({position}: {position: Position} ){
    return (
        <option value={position.id}>{position.title}</option>
    )
}


export default function AddEmployee(){
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState(new Date().toDateString());
    const [company, setCompany] = useState(0);
    const [position, setPosition] = useState(0);
    
    const dispatch = useAppDispatch();

    function addClickHandle(){
        const companyObj = companies[company];
        const positionObj = positions[position];

        dispatch(employeesSlice.actions.add({
            name: name,
            birthDate: birthDate,
            company: companyObj,
            position: positionObj,
        }));
    }

    return (
        <form className="">
            <div>
                <label>Name</label>
                <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Birth Date</label>
                <input type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}/>
            </div>
            <div>
                <label>Company</label>
                <select>
                    {
                        companies.map(c => <CompanyItem company={c} key={c.id} />)
                    }
                </select>
            </div>
            <div>
                <label>Position</label>
                <select>
                    {
                        positions.map(p => <PositionItem position={p} key={p.id} />)
                    }
                </select>
            </div>
            <div>
                <button type="button"
                        onClick={addClickHandle}>
                    Add Employee
                </button>
            </div>
        </form>
    );
}