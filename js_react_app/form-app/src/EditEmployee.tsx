import { memo, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { employeesSlice } from "./store/employee.slice";
import { companies, positions } from "./Data";
import { Company, Position } from "./store/types/Models";

import CompanyItem from "./CompanyItem";
import PositionItem from "./PositionItem";

export default function EditEmployee({employeeId} : {employeeId: number}){
    const employee = useAppSelector(
        (state) => employeesSlice.selectors
                                 .selectEmployee(state, employeeId));

    const [name, setName] = useState("");
    // const [birthDate, setBirthDate] = useState(new Date());
    const [companyId, setCompanyId] = useState(0);
    const [positionId, setPositionId] = useState(0);

    const dispatch = useAppDispatch();

    useEffect(() => {
        setName(employee.name);
        setCompanyId(employee.company!.id);
        setPositionId(employee.position!.id);
    }, [employee]);

    function saveClickHandler(){
        const company = companies.find(c => c.id === companyId);
        const position = positions.find(p => p.id === positionId);

        dispatch(employeesSlice.actions.edit({
            employee: {
                id: employeeId,
                name: name,
                company: company,
                position: position
            }
        }));

        dispatch(employeesSlice.actions.select({ employeeId: undefined }));
    }

    function cancelClickHandler(){
        dispatch(employeesSlice.actions.select({ employeeId: undefined }));
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
            <div className="m-10">
                <button type="button"
                        className="mx-10"
                        onClick={saveClickHandler}
                        >
                    Save Employee
                </button>
                <button type="button"
                        onClick={cancelClickHandler}>
                    Cancel
                </button>
            </div>
        </form>
    );
}