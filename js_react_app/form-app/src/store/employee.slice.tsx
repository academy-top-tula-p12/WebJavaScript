import { Employee, AppDate } from "./types/Models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { employees } from "./data/Data";

type EmployeesState = {
    items: Record<number, Employee>,
    ids: number[],
    selectedEmployeeId: number | undefined,
}

const initEmployeesState: EmployeesState = {
    items: employees.reduce((item, employee) => {
        item[employee.id] = employee;
        return item;
    }, {} as Record<number, Employee>),
    ids: employees.map(employee => employee.id),
    selectedEmployeeId: undefined
}

export const employeesSlice = createSlice({
    name: "employees",
    initialState: initEmployeesState,
    selectors: {
        selectEmployee: (state, employeeId) => state.items[employeeId],
        selectEmployeesIds: (state) => state.ids,
        selectSelectedEmployeeId: (state) => state.selectedEmployeeId
    },
    reducers: {
        select: (state, action: PayloadAction<{employeeId: number | undefined}>) =>{
            const { employeeId } = action.payload;
            state.selectedEmployeeId = employeeId;
        },
        add: (state, action: PayloadAction<{
            name: string,
            birthDate: AppDate
            companyId: number,
            positionId: number,
        }>) => {
            const id = state.ids.reduce((prev, next) => (prev > next) ? prev : next) + 1; //state.ids.length + 1;
            state.ids.push(id);
            state.items[id] = {
                id,
                ...action.payload
            };
        },
        edit: (state, action: PayloadAction<{employee: Employee}>) => {
            const { employee } = action.payload;
            state.items[employee.id] = { ...employee };
        },
        delete: (state, action: PayloadAction<{employeeId: number}>) => {
            const { employeeId } = action.payload;
            const idIndex = state.ids.findIndex(id => id === employeeId);
            state.ids.splice(idIndex, 1);
            delete state.items[employeeId];
        }
    }
});