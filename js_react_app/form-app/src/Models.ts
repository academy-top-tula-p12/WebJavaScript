export interface Company{
    id: number,
    title: string,
}

export interface Position{
    id: number,
    title: string,
    salary: number,
}

export interface Employee{
    id: number,
    name: string,
    birthDate: string,
    company: Company,
    position: Position,
}