import { useSelector } from "react-redux";
const VideoTrailerTitle=()=>{
    let to=useSelector(store=>store.movies.getTrailerVideoList);
    let {title,overview}=to;
    // let {title,overview}=vt;
        return (
            <div className="w-1/4 h-1/2 mt-64 ml-20">
                <div className="">
                <h1 className="font-bold text-3xl">{title}</h1>
                <p className="mt-10 text-base">{overview}</p>
                </div>
                <div className="mt-10 ">
                <btton className="bg-white p-2  font-semibold text-black rounded-lg hover:bg-gray-400" >Play</btton>
                <button className="bg-gray-600 ml-5 p-2 rounded-lg font-semibold">More info </button>
                </div>
            </div>
        )
        }

export default VideoTrailerTitle;