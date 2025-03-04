import getPositions from "@/actions/positions/getPositions";

export default async function PositionsList({
    selectedPositionId   
} : { selectedPositionId?: number}){
    const { positions } = await getPositions();

    return (
        <select name="positionId"
                defaultValue={ selectedPositionId ?? positions[0].id}>
            {
                positions.map((position) => (
                    <option value={ position.id } key={ position.id }>
                        { position.title }
                    </option>
                ))
            }
        </select>
    );
}