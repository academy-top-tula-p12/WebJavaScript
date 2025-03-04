"use server"

import { Position } from "@/prisma/types";

export default async function getPositions(): Promise<{positions: Position[]}> {
    const response = await fetch("http://localhost:3000/api/positions", {
        method: "GET",
    });

    if(response.ok){
        return response.json();
    }

    return { positions: [] };
}