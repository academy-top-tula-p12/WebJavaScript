import { createSlice } from "@reduxjs/toolkit";
import { employees } from "./Data";

export const employeeSlice = createSlice({
    name: "employees",
    initialState: employees,
    reducers:{
        
    }
});