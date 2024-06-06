import { Logo, SupportingLanguage } from "../utils/asset"
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser} from "../utils/cardSlice"
import {  useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toogleSearchView } from "../utils/gptSearchSlice";
import languageChange from "../utils/LanguageChange";
import { addLanguage } from "../utils/languageSlice";


let Header=()=>{
  let user=useSelector((store)=>store.user) ;
  let toggleSearch=useSelector((store)=>store.gpt.gptSearch)
//  let displayName=useSelector((store)=>store.user.displayName)
  let dispatch=useDispatch();
  let navigate=useNavigate();
  let handleClick=()=>{
    signOut(auth).then(()=>{})
    .catch(()=>navigate("/error"))
  }
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, 
        const {uid,email,displayName, photoURL}= user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
  },[]);

  let lanchange=(x)=>{
    dispatch(addLanguage(x.target.value))
  }

  let toogleGpt=()=>{
    dispatch(toogleSearchView());
  }

     let submenu=document.getElementById("sub-menu")
    let toggleMenu=()=>{
          submenu.classList.toggle("open-menu")
        }
    return(<div>
        <div className="absolute flex justify-between w-full items-center bg-gradient-to-b from-black ">
          <img src={Logo} className="w-64" alt="netflix"></img> 
          {
            user &&(<div className="mr-5 flex">
                    {toggleSearch && (<div >
                        <select className="rounded-lg p-2 text-black" onChange={lanchange}>
                          {
                         SupportingLanguage.map((languageChange)=><option key={languageChange.identifire} value={languageChange.identifire}> {languageChange.name}</option>)
                          }
                        </select>
                    </div>)}

                   
                    <button className="bg-red-500 rounded-lg p-2 ml-5" onClick={toogleGpt}> {!toggleSearch?"GPT Search":"Home Page"}</button>
                    <img className="w-10 h-10 cursor-pointer ml-5" src={user.photoURL} alt="Profile" onClick={toggleMenu}></img>
                    <div id="menu" className="mt-10">
                    <div className="popup" id="sub-menu">
                      <h1>{user.displayName}</h1>
                      <hr></hr>
                      <a href=""className="menu-link">
                        <p>Edit Profile</p>
                        <span></span>
                      </a>
                      <a href=""className="menu-link">
                        <p>Setting & Privacy</p>
                        <span></span>
                      </a>
                      <a href=""className="menu-link">
                        <p>Subscriptions</p>
                        <span></span>
                      </a>
                      <button onClick={handleClick} className=" h-fit w-full hover:bg-red-500">SignOut</button>
              </div>
              </div>
              </div>)
          }
         </div>
              </div>
    )
}

export default Header;

