export type Company = {
    id: number;
    title: string;
}

export type Position = {
    id: number;
    title: string;
    salary: number;
}

export type Employee = {
    id: number;
    name: string;
    birthDate: Date;
    company: { 
        title: string;
    };
    position: {
        title: string;
        salary: number;
    };
}
