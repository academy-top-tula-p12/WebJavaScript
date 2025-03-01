import Form from "next/form";
import postCompany from "@/actions/companies/postCompany";

export default function CompanyCreate(){

    return (
        <Form className="flex m-20 
                        justify-center 
                        content-center"
                action={ postCompany }>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Title company:</label>
                <input type="text"
                        name="title"/>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="submit">
                    Add Company
                </button>
            </div>
        </Form>
    );
}