"use server"

import { redirect } from "next/navigation";

export default async function postEmployee(formData: FormData){
    const name = formData.get("name") as string;
    const birthDate = formData.get("birthDate") as string;
    const companyId = formData.get("companyId") as string;
    const positionId = formData.get("positionId") as string;

    const response = await fetch("http://localhost:3000/api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ 
                name: name,
                birthDate: new Date(birthDate),
                companyId: parseInt(companyId),
                positionId: parseInt(positionId)
            })
    });

    if(response.ok)
        redirect("http://localhost:3000/dashboard/employees");
}