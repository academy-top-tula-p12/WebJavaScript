import { Employee, Company, Position } from "../types/Models";

export let companies: Company[] = [
    { id: 1, title: "Yandex" },
    { id: 2, title: "Ozon" },
    { id: 3, title: "Sber" },
];

export let positions: Position[] = [
    { id: 1, title: "Developer", salary: 160000 },
    { id: 2, title: "Manager", salary: 100000 },
    { id: 3, title: "Tester", salary: 115000 },
];

export let employees: Employee[] = [
    { 
        id: 1, 
        name: "Bobby", 
        birthDate: {
            year: 1990, 
            month: 4, 
            day: 25
        }, 
        companyId: 1,
        positionId: 1,
    },
    { 
        id: 2, 
        name: "Sammy",
        birthDate: {
            year: 1985, 
            month: 2, 
            day: 10,
        }, 
        companyId: 2,
        positionId: 2,
    },
    { 
        id: 3, 
        name: "Jonny",
        birthDate: {
            year: 2000, 
            month: 6, 
            day: 17,
        }, 
        companyId: 3,
        positionId: 1,
    },
    { 
        id: 4, 
        name: "Poppy",
        birthDate: {
            year: 1990, 
            month: 8, 
            day: 11
        }, 
        companyId: 1,
        positionId: 3,
    },
    { 
        id: 5, 
        name: "Lenny",
        birthDate: {
            year: 2001, 
            month: 11, 
            day: 3
        }, 
        companyId: 3,
        positionId: 2,
    },
];

