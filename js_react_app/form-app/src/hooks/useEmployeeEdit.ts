import { useAppDispatch, useAppSelector } from "@/store"
import { employeesSlice } from "@/store/employee.slice";
import { useState, FormEvent, useEffect } from "react"

export const useEmployeeEdit = (employeeId : number) =>{
    const dispatch = useAppDispatch();
    const employee = useAppSelector(state => employeesSlice.selectors
                                                            .selectEmployee(state, employeeId));

    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [companyId, setCompanyId] = useState(0);
    const [positionId, setPositionId] = useState(0);

    useEffect(() => {
        setName(employee.name),
        setBirthDate(`${employee.birthDate.year}-${len2(employee.birthDate.month)}-${len2(employee.birthDate.day)}`),
        setCompanyId(employee.companyId),
        setPositionId(employee.positionId)
    }, [employee]);

    function len2(n: number){
        let nstr = `${n}`;
        if(nstr.length < 2)
            nstr = '0' + nstr;
        return nstr;
    }

    function saveHandler(e : FormEvent) {
        e.preventDefault();
        const [year, month, day] = birthDate.split("-").map(Number);
        dispatch(employeesSlice.actions.edit({
            employee:{
                id: employeeId,
                name,
                birthDate: {
                    year,
                    month,
                    day
                },
                companyId,
                positionId,
            }
        }));

        dispatch(employeesSlice.actions.select({ employeeId: undefined }));
    }

    function cancelHandler(){
        dispatch(employeesSlice.actions.select({ employeeId: undefined }));
    }

    return { employee : {
                name,
                birthDate,
                companyId,
                positionId
            },
            saveHandler, 
            cancelHandler,
            setName, 
            setBirthDate, 
            setCompanyId, 
            setPositionId };
}