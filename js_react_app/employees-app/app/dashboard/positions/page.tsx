import Link from "next/link";
import Form from "next/form";
import { Position } from "@/prisma/types";
import getPositions from "@/actions/positions/getPositions";
import deletePosition from "@/actions/positions/deletePosition";

function PositionDashboardItem(
    { position }: { position : Position } ) { 
        return (
            <tr>
                <td>{ position.title }</td>
                <td>{ position.salary }</td>
                <td>
                    <Link href={`/dashboard/positions/${position.id}`}>
                        Edit
                    </Link>
                </td>
                <td>
                    <Form action={ deletePosition }>
                        <input type="hidden" name="id" value={position.id}/>
                        <button type="submit">
                            Delete
                        </button>    
                    </Form>
                    
                </td>
            </tr>
        );
    };

export default async function PositionsDashboard(){
    
    const { positions } = await getPositions();

    return (
        <>
            <h2>Positions dashboard</h2>
            <div>
                <Link href="/dashboard/positions/create">
                    Create Position
                </Link>
            </div>
            <table className='table-auto w-full mx-10 text-xl'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Salary</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { positions.map( (position: Position) => (
                        <PositionDashboardItem position={position} key={position.id} />
                    )) }
                </tbody>
            </table>
        </>
    );
}
