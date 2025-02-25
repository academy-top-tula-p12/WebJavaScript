import { useCompanyEdit } from "@/hooks/useCompanyEdit";


export default function EditCompany(
    { companyId} : {companyId: number}){
    
    const { saveHandler, cancelHandler, title, setTitle } = useCompanyEdit(companyId);
    return (
        <form className="flex m-20 
                        justify-center 
                        content-center">
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Title company:</label>
                <input type="text"
                        value={ title }
                        onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="button"
                        onClick={saveHandler}>
                    Save
                </button>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="button"
                        onClick={cancelHandler}>
                    Cancel
                </button>
            </div>
        </form>
    );
}