import { memo } from "react";
import { Position } from "./store/types/Models"


const PositionItem = memo(function PositionItem({position}: {position: Position} ){
    return (
        <option value={position.id}>{position.title}</option>
    )
});

export default PositionItem;