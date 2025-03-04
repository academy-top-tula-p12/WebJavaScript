"use server"

import { redirect } from "next/navigation";

export default async function putPosition(formData: FormData) {
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const salary = formData.get("salary") as string;

    const response = await fetch(`http://localhost:3000/api/positions/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            title: title,
            salary: salary
        })
    });
    
    if(response.ok)
        redirect("http://localhost:3000/dashboard/positions");
}