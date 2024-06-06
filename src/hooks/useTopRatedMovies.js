import { useEffect } from "react"
import { Api_Option } from "../utils/asset"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice"

const useTopRatedMovies=()=>{
    let dispatch=useDispatch()
    const getTopRatedMovie=async()=>{
        let data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',Api_Option)
        let json=await data.json()
        dispatch(addTopRatedMovies(json.results))

    }
    useEffect(()=>{getTopRatedMovie()},[])
}

export default useTopRatedMovies;