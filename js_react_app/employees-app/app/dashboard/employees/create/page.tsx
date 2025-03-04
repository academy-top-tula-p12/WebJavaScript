import Form from "next/form";
import postEmployee from "@/actions/employees/postEmployee";
import CompaniesList from "../components/comanieslist";
import PositionsList from "../components/positionslist";

export default function EmployeeCreate(){

    return (
        <Form className="flex m-20 
                        justify-center 
                        content-center"
                action={ postEmployee }>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Name:</label>
                <input type="text"
                        name="name"/>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Birth Date:</label>
                <input type="date"
                        name="birthDate"/>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Company:</label>
                <CompaniesList />
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Position:</label>
                <PositionsList />
            </div>


            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="submit">
                    Add Employee
                </button>
            </div>
        </Form>
    );
}