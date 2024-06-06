import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
// import Browser from "./Browser";
import { Background } from "../utils/asset";
import {updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/cardSlice";

let Login_form = () => {
  let [signup, setsignup] = useState(true);
  let [errorMessage, seterrorMessage] = useState(null);
  let dispatch=useDispatch();
  let toogleInSignUp = () => {
    setsignup(!signup);
  };
  let name = useRef(null);
  let email = useRef(null);
  let password = useRef(null);

  const handleButtonClick = () => {
    const message = signup
      ? checkValidateData(email.current.value, password.current.value)
      : checkValidateData(
          email.current.value,
          password.current.value,
          name.current.value
        );

    seterrorMessage(message);
    if (message) return;
    if (!signup) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
                  displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocIBo2IOcQRs9qwEfDwhf7LC4eUgM-Kk9wDGRPElT3X1fQ=s96-c-rg-br100"
                }).then(() => {
                  const {uid,email,displayName }= auth.currentUser;
                  dispatch(addUser({uid:uid,email:email,displayName:displayName}))
                }).catch((error) => {
                  // An error occurred
                  // ...
                });
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(userCredential);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage("password incorrect")
        });
    }
  };
  return (
    <div>
    <Header/>
    <div className='flex items-center justify-center'>
           
        <img src={Background} className=""  alt="Background Image"></img>       
    <div className="absolute bg-black h-3/4 w-1/3 text-white rounded-xl bg-opacity-80">
      <form className="m-20" onSubmit={(e) => e.preventDefault()}>
        <h1 className="text-4xl">{signup ? "Sign In" : "Sign Up"}</h1>
        {!signup && (
          <input
            ref={name}
            className="mt-5 p-5 w-full bg-gray-600 rounded-lg"
            placeholder="Full Name"
          ></input>
        )}
        <input
          ref={email}
          className=" flex mt-5 p-5 w-full bg-gray-600 rounded-lg"
          placeholder="Email"
        ></input>
        <input
          ref={password}
          className="flex mt-5 p-5 w-full bg-gray-600 rounded-lg"
          placeholder="Password"
        ></input>
        <p>{errorMessage}</p>
        <button
          className="p-4 w-full bg-red-600 mt-10 rounded-lg cursor-pointer"
          onClick={handleButtonClick}
        >
          {signup ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-5 cursor-pointer" onClick={toogleInSignUp}>
          {signup
            ? "New to Netflix?   Sign up Now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div> 
    </div>
    </div>
  );
};

export default Login_form;
