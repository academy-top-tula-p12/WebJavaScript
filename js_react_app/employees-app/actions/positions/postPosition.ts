"use server"

import { redirect } from "next/navigation";

export default async function postPosition(formData: FormData){
    const title = formData.get("title") as string;
    const salary = formData.get("salary") as string;

    const response = await fetch("http://localhost:3000/api/positions", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ 
                title: title,
                salary: salary
            })
    });

    redirect("http://localhost:3000/dashboard/positions");
}