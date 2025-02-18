import { Position } from "./types/Models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { positions } from "./data/Data";

type PositionState = {
    items: Record<number, Position>,
    ids: number[],
    selectedPositionId: number | undefined,
}

const initPositionsState: PositionState = {
    items: positions.reduce((item, position) => {
        item[position.id] = position;
        return item;
    }, {} as Record<number, Position>),
    ids: positions.map(position => position.id),
    selectedPositionId: undefined
}

export const positionsSlice = createSlice({
    name: "positions",
    initialState: initPositionsState,
    selectors: {
        selectPosition: (state, positionId: number) => state.items[positionId],
        selectPositionsIds: (state) => state.ids,
        selectSelectedPositionId: (state) => state.selectedPositionId,
    },
    reducers: {
        select: (state, action: PayloadAction<{positionId: number | undefined}>) =>{
            const { positionId } = action.payload;
            state.selectedPositionId = positionId;
        },
        add: (state, action: PayloadAction<{
            title: string,
            salary: number,
        }>) => {
            const id = state.ids.reduce((prev, next) => (prev > next) ? prev : next) + 1;
            state.ids.push(id);
            state.items[id] = {
                id,
                ...action.payload
            };
        },
        edit: (state, action: PayloadAction<{position: Position}>) => {
            const { position } = action.payload;
            state.items[position.id] = { ...position };
        },
        delete: (state, action: PayloadAction<{positionId: number}>) => {
            const { positionId } = action.payload;
            const idIndex = state.ids.findIndex(id => id === positionId);
            state.ids.splice(idIndex, 1);
            delete state.items[positionId];
        }
    }
});
