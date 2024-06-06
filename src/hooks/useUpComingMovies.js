import { useEffect } from "react"
import { Api_Option } from "../utils/asset"
import { useDispatch } from "react-redux"
import { addUpComingMovies } from "../utils/movieSlice"

const useUpComingMovies=()=>{
    let dispatch=useDispatch()
    let getUpComingMovie=async()=>{
        let data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',Api_Option)
        let json=await data.json()
        dispatch(addUpComingMovies(json.results))
    }
    useEffect(()=>{getUpComingMovie()},[])
}

export default useUpComingMovies;