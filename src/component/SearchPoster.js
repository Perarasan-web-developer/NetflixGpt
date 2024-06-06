import { useSelector } from "react-redux"
import { IMG_CDN } from "../utils/asset";

let SearchPoster=()=>{
    let sp=useSelector(store=>store.gpt.suggestionMovie);
    if(!sp) return;

    return(
        <div className="flex absolute mt-32 ml-40">
            {
                sp.map((x)=><div className="">
                    <img className="w-3/5 h-3/3 rounded-xl" src={IMG_CDN+x[0].poster_path}></img>
                </div>)
            }
        </div>
    )
}

export default SearchPoster;