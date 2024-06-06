import { useEffect } from "react"
import Header from "./Header"
import { Api_Option } from "../utils/asset"
import { useDispatch, useSelector } from "react-redux"
import  { addNowPlayingMovies } from "../utils/movieSlice"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import Search from "./Search"
import TrailerVideo from "./TrailerVideo"

const Browser = () => {
 let  dispatch=useDispatch()
//  let list=useSelector((store)=>store.movies.getTrailerVideoList);
 let  NowPlayingMovie=async()=>{
      const Movie=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', Api_Option)
      const json=await Movie.json()
      dispatch(addNowPlayingMovies(json.results))
      // console.log(list.nowPlayingMovie)
  }
  useEffect(()=>{NowPlayingMovie()},[])
  let showGpt=useSelector((store)=>store.gpt.gptSearch)
  // let tp=useSelector(store=>store.movies.getTrailerVideoList)
  // console.log(tp)
  return (
  <div className="text-white">
      <Header/>
      {/* {tp?(<TrailerVideo/>) */}
      {showGpt ?
        (<Search/>)
      :(
      <div>
      <MainContainer/>
      <SecondaryContainer/>
      </div>)}
    </div>
  )
}

export default Browser
