'use client'

import React, { useState } from "react"
import { useRouter } from "next/navigation";

export default function CompanyAdd(){

    const [title, setTitle] = useState("");
    const router = useRouter();

    const addHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = { title };
        await fetch("/api/companies", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        });
        setTitle("");
        router.refresh();
    }

    return (
        <form className="flex m-20 
                        justify-center 
                        content-center"
                onSubmit={addHandler}>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Title company:</label>
                <input type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="submit">
                    Add Company
                </button>
            </div>
        </form>
    );
}