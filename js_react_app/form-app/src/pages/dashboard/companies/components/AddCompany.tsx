import { FormEvent, useRef } from "react";
import { useCompanyAdd } from "@/hooks/useCompanyAdd";

export default function AddCompany(){

    const { handler, setTitle } = useCompanyAdd();

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
                <label className="mx-5">Title company:</label>
                <input type="text"
                        onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="button"
                        onClick={handlerClick}>
                    Add Company
                </button>
            </div>
        </form>
    );
}