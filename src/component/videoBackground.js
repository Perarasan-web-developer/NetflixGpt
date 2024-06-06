import { useEffect } from "react";
import { Api_Option } from "../utils/asset";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingTrailer } from "../utils/movieSlice";

let VideoBackground=({movieId})=>{
    let yt_key=useSelector((store)=> store.movies.nowPlayingTrailer)
   let  dispatch=useDispatch()
    let videoTrialer=async(movieId)=>{
            const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',Api_Option)
            const json= await data.json()
            let arr=json.results.filter((x)=> x.type === "Trailer")
            let trailer=arr.length? arr[0]:json.results[0];
            dispatch(addNowPlayingTrailer(trailer))
    }
useEffect(()=>{videoTrialer(movieId)},[]);
return (
    <div>
        <iframe width="100%" height="700" src={"https://www.youtube.com/embed/"+yt_key?.key+"?autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
)
}



export default VideoBackground;