import { createSlice } from "@reduxjs/toolkit";

let gptSearchSlice=createSlice({
    name:"search",
    initialState:{
        gptSearch:false,
        suggestionMovie:null
    },
    reducers:{
        toogleSearchView:(state,action)=>{
            state.gptSearch=!state.gptSearch
        },
        addSuggestionMovie:(state,action)=>{
            state.suggestionMovie=action.payload;
        }
    }
})

export default gptSearchSlice.reducer;
export const {toogleSearchView,addSuggestionMovie}=gptSearchSlice.actions;