"use server"

import { redirect } from "next/navigation";

export default async function putCompany(formData: FormData) {
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;

    const response = await fetch(`http://localhost:3000/api/companies/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            title: title
        })
    });
    
    if(response.ok)
        redirect("http://localhost:3000/dashboard/companies");
}