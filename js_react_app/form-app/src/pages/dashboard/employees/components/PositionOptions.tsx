import { memo } from "react";
import { useAppSelector } from "@/store";
import { positionsSlice } from "@/store/position.slice";

const PositionOptionsItem = memo(function PositionOptionsItem({
    positionId
} : {positionId: number}){
    const position = useAppSelector(state => positionsSlice.selectors.selectPosition(state, positionId));

    return (
        <option value={positionId}>
            {position.title}
        </option>
    )
});

export default function PositionOptions(){
    const positionIds = useAppSelector(positionsSlice.selectors.selectPositionsIds);

    return (
        <>
            { positionIds.map((id) => <PositionOptionsItem positionId={id} key={id}/>) }
        </>
    )
}

