import { createSlice } from "@reduxjs/toolkit";

let languageSlice=createSlice(
{
    name:"language",
    initialState:{
        language:"En"
    },
    reducers:{
        addLanguage:(state,action)=>{
            state.language=action.payload;
        }
    }
})

export default languageSlice.reducer;
export const{addLanguage}=languageSlice.actions;