"use server"

export default async function getPosition(id: string) {
    const response = await fetch(`http://localhost:3000/api/positions/${id}`, {
        method: "GET"
    });

    if(response.ok)
        return await response.json();
}