import { useAppDispatch } from "@/store"
import { companiesSlice } from "@/store/company.slice";

import { useState, FormEvent } from "react"

export const useCompanyAdd = () =>{
    const dispatch = useAppDispatch();

    const [title, setTitle] = useState("");

    function handler(e: FormEvent){
        e.preventDefault();
        dispatch(companiesSlice.actions.add({
            title
        }));
    }

    return { handler, setTitle };
}