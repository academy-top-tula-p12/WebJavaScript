import { memo } from "react";
import { Company } from "./store/types/Models"

const CompanyItem = memo(function CompanyItem( { company } : {
    company: Company
}){
    return (
        <option value={company.id}>{company.title}</option>
    )
});

export default CompanyItem;

