export default function CompanyEdit(){
    
    return (
        <form className="flex m-20 
                        justify-center 
                        content-center">
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Title company:</label>
                <input type="text" />
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="button">
                    Save
                </button>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="button">
                    Cancel
                </button>
            </div>
        </form>
    );
}