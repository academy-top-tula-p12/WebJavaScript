import { memo, useState } from "react";
import { useAppDispatch } from "./store";
import { employeesSlice } from "./store/employee.slice";
import { companies, positions } from "./Data";
import { Company, Position } from "./store/types/Models";
import CompanyItem from "./CompanyItem";
import PositionItem from "./PositionItem";

export default function AddEmployee(){
    const [name, setName] = useState("");
    // const [birthDate, setBirthDate] = useState(new Date());
    const [companyId, setCompanyId] = useState(0);
    const [positionId, setPositionId] = useState(0);
    
    const dispatch = useAppDispatch();

    function addClickHandle(){
        const company = companies.find(c => c.id === companyId);
        const position = positions.find(p => p.id === positionId);

        dispatch(employeesSlice.actions.add({
            name: name,
            // birthDate: birthDate,
            company: company,
            position: position,
        }));
    }

    return (
        <form className="flex m-20 
                        justify-center 
                        content-center">
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Name</label>
                <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
            </div>
            {/* <div>
                <label>Birth Date</label>
                <input type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}/>
            </div> */}
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Company</label>
                <select value={companyId}
                        onChange={(e) => setCompanyId(parseInt(e.target.value))}>
                    {
                        companies.map(c => <CompanyItem company={c} key={c.id} />)
                    }
                </select>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Position</label>
                <select value={positionId}
                        onChange={(e) => setPositionId(parseInt(e.target.value))}>
                    {
                        positions.map(p => <PositionItem position={p} key={p.id} />)
                    }
                </select>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="button"
                        onClick={addClickHandle}>
                    Add Employee
                </button>
            </div>
        </form>
    );
}