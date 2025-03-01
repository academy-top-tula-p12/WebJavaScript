"use server"

import { Company } from "@/prisma/types";

export default async function getCompanies(): Promise<{companies: Company[]}> {
    const response = await fetch("http://localhost:3000/api/companies", {
        method: "GET",
    });

    if(response.ok){
        return response.json();
    }

    return { companies: [] };
}