import { createSlice } from "@reduxjs/toolkit";

const singleContactSlice = createSlice({
    name: 'contact',
    initialState: {
        contact: {},
    },
    reducers: {
        addSingleContact (state, action) {
            console.log(action.payload)
            console.log(state.contact)
            
            state.contact = action.payload
        },
               
    }     
})

export const { addSingleContact } = singleContactSlice.actions;
export const singleContactReducer = singleContactSlice.reducer;