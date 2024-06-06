import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import movieSlice from "./movieSlice";
import gptSearchSlice from "./gptSearchSlice";
import languageSlice from "./languageSlice";

let appStore=configureStore({
    reducer:{
        user:cardSlice,
        movies:movieSlice,
        gpt:gptSearchSlice,
        lang:languageSlice
    }
})

export default appStore;