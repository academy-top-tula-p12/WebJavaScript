export interface Company{
    id: number,
    title: string,
}

export interface Position{
    id: number,
    title: string,
    salary: number,
}

export interface AppDate{
    day: number,
    month: number,
    year: number,
}

export interface Employee{
    id: number,
    name: string,
    birthDate: AppDate,
    companyId: number,
    positionId: number,
}