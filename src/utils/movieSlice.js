import { createSlice } from "@reduxjs/toolkit";

let movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovie:null,
        nowPlayingTrailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        getTrailerVideoList:null,
        getTrailerVideo:null
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovie=action.payload;
        },
        addNowPlayingTrailer: (state,action)=>{
            state.nowPlayingTrailer=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpComingMovies:(state,action)=>{
            state.upComingMovies=action.payload
        },
        addTrailerVideoList:(state,action)=>{
            state.getTrailerVideoList=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.getTrailerVideo=action.payload
        }

    }
})

export default movieSlice.reducer;
export const {addNowPlayingMovies,addNowPlayingTrailer,addPopularMovies,addTopRatedMovies,addUpComingMovies,addTrailerVideoList,addTrailerVideo}=movieSlice.actions;