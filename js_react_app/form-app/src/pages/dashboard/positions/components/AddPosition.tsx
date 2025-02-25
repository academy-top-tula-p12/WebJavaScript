import { FormEvent, useRef } from "react";
import { usePositionAdd } from "@/hooks/usePositionAdd";

export default function AddPosition(){

    const { handler, setTitle, setSalary } = usePositionAdd();

    const form = useRef<HTMLFormElement>(null);

    function handlerClick(e: FormEvent){
        e.preventDefault();
        handler(e);
        form.current?.reset();
    }

    return (
        <form className="flex m-20 
                        justify-center 
                        content-center"
            ref={ form }>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Title position:</label>
                <input type="text"
                        onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Salary:</label>
                <input type="number"
                        onChange={(e) => setSalary(e.target.value)} />
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="button"
                        onClick={handlerClick}>
                    Add Position
                </button>
            </div>
        </form>
    );
}