import { useAppSelector } from "../store";
import { employeesSlice } from "../store/employee.slice";
import { companiesSlice } from "../store/company.slice";
import { positionsSlice } from "../store/position.slice";

export const useEmployeeData = (employeeId: number) => {
    const employee = useAppSelector(state => {
        return employeesSlice.selectors.selectEmployee(state, employeeId);
    });
    const position = useAppSelector(state => {
        return positionsSlice.selectors.selectPosition(state, employee.positionId);
    });
    const company = useAppSelector(state => {
        return companiesSlice.selectors.selectCompany(state, employee.companyId);
    });

    return {
        name: employee.name,
        birthDate: employee.birthDate,
        company: company.title,
        position: position.title,
        salary: position.salary,
    };
}