import { positionsSlice } from "@/store/position.slice";
import { memo } from "react";
import { useAppSelector, useAppDispatch } from "@/store";
import AddPosition from "./components/AddPosition";
import EditPosition from "./components/EditPosition";

const PositionsDashboardItem = memo(function PositionsDashboardItem(
    { positionId } : { positionId: number}){
        const position = useAppSelector(
            state => positionsSlice.selectors.selectPosition(state, positionId));
        const dispatch = useAppDispatch();
        
        return (
            <tr>
                <td>{ position.title }</td>
                <td>{ position.salary }</td>
                <td>
                    <button type="button"
                            onClick={() => dispatch(positionsSlice.actions.select({ positionId }))}>
                        Edit
                    </button>
                </td>
                <td>
                    <button type="button"
                            onClick={() => dispatch(positionsSlice.actions.delete({ positionId }))}>
                        Delete
                    </button>
                </td>
            </tr>
        )

    });

export default function PositionsDashboard(){
    const positionsIds = useAppSelector(positionsSlice.selectors.selectPositionsIds);
    const selectedId = useAppSelector(positionsSlice.selectors.selectSelectedPositionId);

    return (
        <>
            <div>
                {(selectedId === undefined) ? 
                    <AddPosition /> 
                    : <EditPosition positionId={selectedId} />}
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
                    { positionsIds.map( id => (
                        <PositionsDashboardItem positionId={id} key={id} />
                    )) }
                </tbody>
            </table>
        </>
    );
}