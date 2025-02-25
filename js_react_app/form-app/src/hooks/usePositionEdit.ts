import { useAppDispatch, useAppSelector } from "@/store"
import { positionsSlice } from "@/store/position.slice";

import { useState, FormEvent, useEffect } from "react"

export const usePositionEdit = ( positionId: number ) =>{
    const dispatch = useAppDispatch();

    const company = useAppSelector(
        state => positionsSlice.selectors.selectPosition(state, positionId));

    const [title, setTitle] = useState("");
    const [salary, setSalary] = useState("");

    useEffect(() => {
        setTitle(company.title);
        setSalary(company.salary.toString());
    }, [company]);

    function saveHandler(e : FormEvent) {
            e.preventDefault();
            dispatch(positionsSlice.actions.edit({
                position:{
                    id: company.id,
                    title: title,
                    salary: Number.parseInt(salary)
                }
            }));
    
            dispatch(positionsSlice.actions.select({ positionId: undefined }));
    }
    
    function cancelHandler(){
            dispatch(positionsSlice.actions.select({ positionId: undefined }));
    }

    return { saveHandler, 
            cancelHandler, 
            position: { title, salary },
            setTitle,
            setSalary };
}