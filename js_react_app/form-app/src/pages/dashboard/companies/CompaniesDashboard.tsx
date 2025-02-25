import { companiesSlice } from "@/store/company.slice";
import { memo } from "react";
import { useAppSelector, useAppDispatch } from "@/store";
import AddCompany from "./components/AddCompany";
import EditCompany from "./components/EditCompany";

const CompanyDashboardItem = memo(function CompanyDashboardItem(
    { companyId } : { companyId: number}){
        const company = useAppSelector(
            state => companiesSlice.selectors.selectCompany(state, companyId));
        const dispatch = useAppDispatch();
        
        return (
            <tr>
                <td>{ company.title }</td>
                <td>
                    <button type="button"
                            onClick={() => dispatch(companiesSlice.actions.select({ companyId }))}>
                        Edit
                    </button>
                </td>
                <td>
                    <button type="button"
                            onClick={() => dispatch(companiesSlice.actions.delete({ companyId }))}>
                        Delete
                    </button>
                </td>
            </tr>
        )

    });

export default function CompaniesDashboard(){
    const companiesIds = useAppSelector(companiesSlice.selectors.selectCompaniesIds);
    const selectedId = useAppSelector(companiesSlice.selectors.selectSelectedCompanyId);

    return (
        <>
            <div>
                {(selectedId === undefined) ? 
                    <AddCompany /> 
                    : <EditCompany companyId={selectedId} />}
            </div>
            <table className='table-auto w-full mx-10 text-xl'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { companiesIds.map( id => (
                        <CompanyDashboardItem companyId={id} key={id} />
                    )) }
                </tbody>
            </table>
        </>
    );
}