// import { useState } from "react";
import { IMG_CDN } from "../utils/asset";
import { useDispatch } from "react-redux";
import { addTrailerVideoList } from "../utils/movieSlice";

const MovieCard=({movieInfo})=>{
    let dispatch=useDispatch();
    const TrailerVideoList=(movieInfo)=>{
        dispatch(addTrailerVideoList(movieInfo))
    }
    return (
        <div className="min-w-48 ml-3 hover:shadow-white shadow-xl" >
            <img It="Movie card" onClick={()=>TrailerVideoList(movieInfo)} src={IMG_CDN+movieInfo.poster_path}></img>
        </div>
    )
}

export default MovieCard;