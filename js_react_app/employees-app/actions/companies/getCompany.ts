"use server"

export default async function getCompany(id: string) {
    const response = await fetch(`http://localhost:3000/api/companies/${id}`, {
        method: "GET"
    });

    if(response.ok)
        return await response.json();
}