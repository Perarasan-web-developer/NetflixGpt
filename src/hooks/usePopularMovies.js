import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Api_Option } from "../utils/asset"
import { addPopularMovies } from "../utils/movieSlice"

let usePopularMovies=()=>{
  let   dispatch=useDispatch();
    let  popularMovie=async()=>{
        const Movie=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',Api_Option)
        const json=await Movie.json()
        dispatch(addPopularMovies(json.results))
        // console.log(Movie.popularMovie)
    }

    useEffect(()=>{popularMovie()},[]);
}


export default usePopularMovies;