import { combineReducers, configureStore, createSelector } from "@reduxjs/toolkit";
import { useStore, useSelector, useDispatch } from "react-redux";

import { employeesSlice } from "./employee.slice";

const reducer = combineReducers({
    employees: employeesSlice.reducer,
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