"use server"

import { Employee, Position } from "@/prisma/types";

export default async function getEmployees(): Promise<{employees: Employee[]}> {
    const response = await fetch("http://localhost:3000/api/employees", {
        method: "GET",
    });

    if(response.ok){
        return response.json();
    }

    return { employees: [] };
}