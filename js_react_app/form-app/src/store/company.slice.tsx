import { Company } from "./types/Models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { companies } from "./data/Data";

type CompanyState = {
    items: Record<number, Company>,
    ids: number[],
    selectedCompanyId: number | undefined,
}

const initCompaniesState: CompanyState = {
    items: companies.reduce((item, company) => {
        item[company.id] = company;
        return item;
    }, {} as Record<number, Company>),
    ids: companies.map(company => company.id),
    selectedCompanyId: undefined
}

export const companiesSlice = createSlice({
    name: "companies",
    initialState: initCompaniesState,
    selectors: {
        selectCompany: (state, companyId: number) => state.items[companyId],
        selectCompaniesIds: (state) => state.ids,
        selectSelectedCompanyId: (state) => state.selectedCompanyId,
    },
    reducers: {
        select: (state, action: PayloadAction<{companyId: number | undefined}>) =>{
            const { companyId } = action.payload;
            state.selectedCompanyId = companyId;
        },
        add: (state, action: PayloadAction<{
            title: string,
        }>) => {
            const id = state.ids.reduce((prev, next) => (prev > next) ? prev : next) + 1;
            state.ids.push(id);
            state.items[id] = {
                id,
                ...action.payload
            };
        },
        edit: (state, action: PayloadAction<{company: Company}>) => {
            const { company } = action.payload;
            state.items[company.id] = { ...company };
        },
        delete: (state, action: PayloadAction<{companyId: number}>) => {
            const { companyId } = action.payload;
            const idIndex = state.ids.findIndex(id => id === companyId);
            state.ids.splice(idIndex, 1);
            delete state.items[companyId];
        }
    }
});
