import { useAppDispatch, useAppSelector } from "@/store"
import { companiesSlice } from "@/store/company.slice";

import { useState, FormEvent, useEffect } from "react"

export const useCompanyEdit = ( companyId: number ) =>{
    const dispatch = useAppDispatch();

    const company = useAppSelector(
        state => companiesSlice.selectors.selectCompany(state, companyId));

    const [title, setTitle] = useState("");

    useEffect(() => {
        setTitle(company.title)
    }, [company]);

    function saveHandler(e : FormEvent) {
            e.preventDefault();
            dispatch(companiesSlice.actions.edit({
                company:{
                    id: company.id,
                    title: title
                }
            }));
    
            dispatch(companiesSlice.actions.select({ companyId: undefined }));
    }
    
    function cancelHandler(){
            dispatch(companiesSlice.actions.select({ companyId: undefined }));
    }

    return { saveHandler, cancelHandler, title, setTitle };
}