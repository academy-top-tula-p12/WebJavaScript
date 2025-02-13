import { Company, Position, Employee } from './Models.ts'

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
        birthDate: new Date(1990, 4, 25), 
        company: companies[0],
        position: positions[0]
    },
    { 
        id: 2, 
        name: "Sammy", 
        birthDate: new Date(1985, 2, 10), 
        company: companies[1],
        position: positions[1]
    },
    { 
        id: 3, 
        name: "Jonny", 
        birthDate: new Date(2000, 6, 17), 
        company: companies[2],
        position: positions[0]
    },
    { 
        id: 4, 
        name: "Poppy", 
        birthDate: new Date(1990, 8, 11), 
        company: companies[0],
        position: positions[2]
    },
    { 
        id: 5, 
        name: "Lenny", 
        birthDate: new Date(2001, 11, 3), 
        company: companies[2],
        position: positions[1]
    },
];

