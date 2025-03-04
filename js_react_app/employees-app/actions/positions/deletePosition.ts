"use server"

import { revalidatePath } from "next/cache";


export default async function deletePosition(formData: FormData) {
    const id = formData.get("id") as string;

    const response = await fetch(`http://localhost:3000/api/positions/${id}`,{
        method: "DELETE",
    });

    revalidatePath("/dashboard/positions");
}