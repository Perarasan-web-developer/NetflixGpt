import { useDispatch, useSelector } from "react-redux";
import { Api_Option, Background, gemini_Api } from "../utils/asset";
import languageChange from "../utils/LanguageChange";
import { useRef } from "react";
import { addSuggestionMovie } from "../utils/gptSearchSlice";
import SearchPoster from "./SearchPoster";
const { GoogleGenerativeAI } = require("@google/generative-ai");

let Search=()=>{
    let dispatch=useDispatch();
    let lagKey=useSelector(store=>store.lang.language)
    let searchInput=useRef(null)

    let getSearchPoster=async(movieName)=>{
        let data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1', Api_Option)
        let json=await data.json()
        return json.results;
    }

    let netflixSearch=async()=>{
        const genAI = new GoogleGenerativeAI(gemini_Api);
            const model = genAI.getGenerativeModel({ model: "gemini-pro"});
            const prompt = "Act as a movie recommendation system and suggest some movies for the query : "+searchInput.current.value+
            ". only give me names of 5 movies ,comma seperated like the example result given ahead. Example Result:vikram vedha,96,visaranai,kaithi,viswasam";
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            // console.log(text);
            const poster_path = text.split(",")
            let arr=poster_path.map((x)=>{return (getSearchPoster(x))});
            let val=await Promise.all(arr);
            dispatch(addSuggestionMovie(val))
          } 


    return(
        <div> 
            <div><img className="absolute -z-10" src={Background}></img>
            <div className="pt-40">
            <div className="bg-black h-16 p-2 mx-[28%] grid grid-cols-12 gap-2 rounded-md opacity-80">
                <input ref={searchInput} className=" rounded-lg text-black col-span-9" placeholder={languageChange[lagKey].gptSearchPlaceholder}></input>
                <button className="bg-white text-black rounded-lg col-span-3" onClick={netflixSearch}>{languageChange[lagKey].search}</button>
                </div></div></div>
                <div>
                    <SearchPoster/>
                </div>
        </div>
    )
}

export default Search;