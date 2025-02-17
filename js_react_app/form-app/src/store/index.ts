import { combineReducers, configureStore, createSelector } from "@reduxjs/toolkit";
import { useStore, useSelector, useDispatch } from "react-redux";

import { employeesSlice } from "./employee.slice";
import { positionsSlice } from "./position.slice";
import { companiesSlice } from "./company.slice";
import { companies } from "./data/Data";

const reducer = combineReducers({
    employees: employeesSlice.reducer,
    positions: positionsSlice.reducer,
    companies: companiesSlice.reducer,
});

export const store = configureStore({
    reducer,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<AppState>();