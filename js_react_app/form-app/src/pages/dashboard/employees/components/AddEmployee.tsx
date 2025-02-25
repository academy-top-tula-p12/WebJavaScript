import { useEmployeeAdd } from "@/hooks/useEmployeeAdd";
import CompanyOptions from "./CompanyOptions";
import PositionOptions from "./PositionOptions";
import { FormEvent, useRef } from "react";

export default function AddEmployee(){
   const {
    handler, setName, setBirthDate, setCompanyId, setPositionId
   } = useEmployeeAdd();

   const form = useRef<HTMLFormElement>(null);

   function handlerClick(e: FormEvent){
    e.preventDefault();
    handler(e);
    form.current?.reset();
   }

    return (
        <form className="flex m-20 
                        justify-center 
                        content-center"
                ref={form}>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Name</label>
                <input type="text"
                        onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label>Birth Date</label>
                <input type="date"
                        onChange={(e) => setBirthDate(e.target.value)}/>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Company</label>
                <select onChange={(e) => setCompanyId(parseInt(e.target.value))}>
                    <CompanyOptions />
                </select>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Position</label>
                <select onChange={(e) => setPositionId(parseInt(e.target.value))}>
                    <PositionOptions />
                </select>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="button"
                        onClick={handlerClick}>
                    Add Employee
                </button>
            </div>
        </form>
    );
}