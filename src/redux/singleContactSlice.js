import { createSlice } from "@reduxjs/toolkit";

const singleContactSlice = createSlice({
    name: 'contact',
    initialState: {
        contact: {
            id:'',
            name:'',
            number:''
        },
    },
    reducers: {
        addSingleContact (state, action) {
            console.log(action.payload)
    
        
                state.contact = action.payload
            console.log(state.contact)
        },
               
    }     
})

export const { addSingleContact } = singleContactSlice.actions;
export const singleContactReducer = singleContactSlice.reducer;