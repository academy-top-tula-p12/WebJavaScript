import Form from "next/form";
import postPosition from "@/actions/positions/postPosition";

export default function PositionCreate(){

    return (
        <Form className="flex m-20 
                        justify-center 
                        content-center"
                action={ postPosition }>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Title of position:</label>
                <input type="text"
                        name="title"/>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Salary of position:</label>
                <input type="number"
                        name="salary"/>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="submit">
                    Add Position
                </button>
            </div>
        </Form>
    );
}