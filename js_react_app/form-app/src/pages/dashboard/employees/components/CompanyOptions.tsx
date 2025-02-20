import { memo } from "react";
import { useAppSelector } from "@/store";
import { companiesSlice } from "@/store/company.slice";

const CompanyOptionsItem = memo(function CompanyOptionsItem({
    companyId
} : {companyId: number}){
    const company = useAppSelector(state => companiesSlice.selectors.selectCompany(state, companyId));

    return (
        <option value={companyId}>
            {company.title}
        </option>
    )
});

export default function CompanyOptions(){
    const companiesIds = useAppSelector(companiesSlice.selectors.selectCompaniesIds);

    return (
        <>
            { companiesIds.map((id) => <CompanyOptionsItem companyId={id} key={id}/>) }
        </>
    )
}

