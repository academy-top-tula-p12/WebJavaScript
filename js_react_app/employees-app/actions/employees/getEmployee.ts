"use server"

export default async function getEmployee(id: string) {
    const response = await fetch(`http://localhost:3000/api/employees/${id}`, {
        method: "GET"
    });

    if(response.ok)
        return await response.json();
}