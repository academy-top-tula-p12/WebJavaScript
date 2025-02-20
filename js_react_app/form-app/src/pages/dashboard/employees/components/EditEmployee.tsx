import { useEmployeeEdit } from "@/hooks/useEmployeeEdit";
import CompanyOptions from "./CompanyOptions";
import PositionOptions from "./PositionOptions";

export default function EditEmployee({
    employeeId
}: { employeeId: number }){

    const {
        employee,
        saveHandler, 
        cancelHandler,
        setName, 
        setBirthDate, 
        setCompanyId, 
        setPositionId
    } = useEmployeeEdit(employeeId);

    return (
        <form className="flex m-20 
                        justify-center 
                        content-center">
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Name</label>
                <input type="text"
                value={employee.name}
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label>Birth Date</label>
                <input type="date"
                        value={employee.birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}/>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Company</label>
                <select 
                    value={employee.companyId}
                    onChange={(e) => setCompanyId(parseInt(e.target.value))}>
                    <CompanyOptions />
                </select>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Position</label>
                <select 
                    value={employee.positionId}
                    onChange={(e) => setPositionId(parseInt(e.target.value))}>
                    <PositionOptions />
                </select>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="button"
                        onClick={saveHandler}>
                    Save
                </button>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="button"
                        onClick={cancelHandler}>
                    Cancel
                </button>
            </div>
        </form>
    );
}