import { useAppDispatch, useAppSelector } from "@/store"
import { employeesSlice } from "@/store/employee.slice";
import { companiesSlice } from "@/store/company.slice";
import { positionsSlice } from "@/store/position.slice";

import { useState, FormEvent } from "react"

export const useEmployeeAdd = () =>{
    const dispatch = useAppDispatch();

    const idCompanyFirst = useAppSelector(companiesSlice.selectors.selectCompaniesIds)[0];
    const idPositionFirst = useAppSelector(positionsSlice.selectors.selectPositionsIds)[0];

    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [companyId, setCompanyId] = useState(idCompanyFirst);
    const [positionId, setPositionId] = useState(idPositionFirst);

    function handler(e : FormEvent) {
        e.preventDefault();
        const [year, month, day] = birthDate.split("-").map(Number);
        dispatch(employeesSlice.actions.add({
            name,
            birthDate: {
                year,
                month,
                day
            },
            companyId: companyId,
            positionId: positionId,
        }));
    }

    return { handler, setName, setBirthDate, setCompanyId, setPositionId };
}