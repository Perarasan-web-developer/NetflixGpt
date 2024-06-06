
import { useSelector } from "react-redux";
import MovieList from "./MovieList"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

const  SecondaryContainer =()=>{
    const secondaryMovie=useSelector((store)=> store.movies);
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();
return (
    <div className="bg-black">
        <MovieList title={"Now Playing"} secondaryMovie={secondaryMovie.nowPlayingMovie}/>
        <MovieList title={"Up Coming"} secondaryMovie={secondaryMovie.upComingMovies}/>
        <MovieList title={"Top Rated"} secondaryMovie={secondaryMovie.topRatedMovies}/>
        <MovieList title={"Popular"} secondaryMovie={secondaryMovie.popularMovies}/>
    </div>
)
}

export default SecondaryContainer;