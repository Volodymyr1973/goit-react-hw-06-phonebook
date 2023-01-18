import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: "",
    },
    reducers: {
        addFilter (state, action) {
            console.log(action.payload)
            console.log(state.filter)
            
            state.filter = action.payload
        },
               
    }     
})

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;