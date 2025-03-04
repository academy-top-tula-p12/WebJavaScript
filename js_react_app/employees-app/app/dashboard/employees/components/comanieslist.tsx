import getCompanies from "@/actions/companies/getCompanies";

export default async function CompaniesList({
    selectedCompanyId   
} : { selectedCompanyId?: number}){
    const { companies } = await getCompanies();

    return (
        <select name="companyId"
                defaultValue={ selectedCompanyId ?? companies[0].id}>
            {
                companies.map((company) => (
                    <option value={ company.id } key={ company.id }>
                        { company.title }
                    </option>
                ))
            }
        </select>
    );
}