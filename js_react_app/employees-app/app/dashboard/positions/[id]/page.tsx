import Form from "next/form";
import Link from "next/link";
import getPosition from "@/actions/positions/getPosition";
import putPosition from "@/actions/positions/putPosition";

export default async function PositionEdit(
    { params }: { params: Promise<{ id: string}> }
){
    const { id } = await params;
    const { position } = await getPosition(id);
    return (
        <Form className="flex m-20 
                        justify-center 
                        content-center"
                action={ putPosition }>
            <input type="hidden" name="id" value={ position.id }/>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Title of position:</label>
                <input type="text"
                        defaultValue = { position.title }
                        name="title"/>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <label className="mx-5">Salary of position:</label>
                <input type="number"
                        defaultValue = { position.salary }
                        name="salary"/>
            </div>
            <div className="m-10 border-solid border-gray-500 border-1">
                <button type="submit">
                    Save Position
                </button>
                <Link href="/dashboard/positions">
                    Cancel
                </Link>
            </div>
        </Form>
    );
}