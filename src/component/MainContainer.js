import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./videoBackground"
import TrailerVideo from "./TrailerVideo"
import VideoTrailerTitle from "./VideoTrailerTitle"
// import TrailerVideo from "./TrailerVideo"

const MainContainer=()=>{
    const main=useSelector(store=>store.movies.nowPlayingMovie)
    const tl=useSelector(store=>store.movies.getTrailerVideoList)
    // let tp=useSelector(store=>store.movies.getTrailerVideoList)
    if(!main) return;
    const mainMovie=main[0]
    const {title,overview,id}=mainMovie
    // const id1="1011985";
    // console.log(id1)
    return(
        <div className="">
             <div className="absolute ">
                {
                    tl?(<VideoTrailerTitle/>):
                    (<VideoTitle title={title} overview={overview}/>)
                }
           </div>  
           {  
                tl?(<div>{console.log("...")}<TrailerVideo/></div>):
                    (<div>{console.log("////")}<VideoBackground movieId={id}/></div>)
           }
        </div>
    )
}

export default MainContainer;