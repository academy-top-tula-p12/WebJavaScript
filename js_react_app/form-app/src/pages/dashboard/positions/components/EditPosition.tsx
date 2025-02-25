import { usePositionEdit } from "@/hooks/usePositionEdit";


export default function EditPosition(
    { positionId} : {positionId: number}){
    
    const { saveHandler, 
        cancelHandler, 
        position,
        setTitle,
        setSalary } = usePositionEdit(positionId);

    return (
        <form className="flex m-20 
                        justify-center 
                        content-center">
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Title position:</label>
                <input type="text"
                        value={ position.title }
                        onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Salary:</label>
                <input type="text"
                        value={ position.salary }
                        onChange={(e) => setSalary(e.target.value)} />
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