import { useAppDispatch } from "@/store"
import { positionsSlice } from "@/store/position.slice";

import { useState, FormEvent } from "react"

export const usePositionAdd = () =>{
    const dispatch = useAppDispatch();

    const [title, setTitle] = useState("");
    const [salary, setSalary] = useState("");

    function handler(e: FormEvent){
        e.preventDefault();
        const salaryNumber = Number.parseInt(salary);
        dispatch(positionsSlice.actions.add({
            title,
            salary: salaryNumber
        }));
    }

    return { handler, setTitle, setSalary };
}