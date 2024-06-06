import { createSlice } from "@reduxjs/toolkit";

let cardSlice=createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        addUser: (state,action)=>{
            return action.payload;
        },
        removeUser: (state,action)=>{
            return null;
        }
    }
})

export default cardSlice.reducer;
export const {addUser,removeUser}=cardSlice.actions;