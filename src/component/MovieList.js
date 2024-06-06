import MovieCard from "./MovieCard";

const MovieList=({title,secondaryMovie})=>{
    if(!secondaryMovie) return
    return (
        <div>
            <div className="ml-3">
            <h1 className="mt-3 font-semibold font-mono ">{title}</h1>
            <div className="flex overflow-x-scroll mt-3 ml-2" id="slidebar">
            {secondaryMovie.map((movie)=><MovieCard key={movie.id} movieInfo={movie}/>)}
            </div>
            </div>
        </div>
    )
}

export default MovieList;