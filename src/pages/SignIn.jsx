import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router";
import { useState } from "react";

import SignInChatAnimation from "../assets/SignInLottieAnimation.json";
import Button from "../components/common_component/Button";
import { FcGoogle } from "react-icons/fc";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { successToast } from "../Toastify";

import { getDatabase, ref, set ,push } from "firebase/database";

import { useNavigate } from "react-router";

const SignIn = () => {
  const auth = getAuth();
  const db = getDatabase();

  const Navigate = useNavigate();

  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: "",
  });
  const [loginInfoErr, setloginInfoErr] = useState({
    emailErr: "",
    passwordErr: "",
  });

  //todo: Input field
  const handleInput = (event) => {
    const { id, value } = event.target; //input field distructure
    setloginInfo({
      ...loginInfo, //... spread
      [id]: value,
    });
    // console.log(`The id  is :${id} and the value is:${value}  `) //input field id and value show in console
  };

  console.log(loginInfo);
  /*
  const obj ={
    email :"",
    password:""
  }
  console.log(obj);

  const newobj ={
    ...obj,//.... spread
    name:"boenii"
  }
console.log(newobj);
*/

  // todo:signin button

  const handleSignIn = () => {
    // alert("hi!") //todo: button working check

    const { email, password } = loginInfo;

    if (!email) {
      setloginInfoErr({ ...loginInfoErr, emailErr: "Your email is missing !" });
    } else if (!password) {
      setloginInfoErr({
        ...loginInfoErr,
        passwordErr: "Your password is missing !",
      });
    } else {
      setloginInfoErr({
        ...loginInfoErr,
        emailErr: "",
        passwordErr: "",
      });
      const { email, password } = loginInfo;
      signInWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          console.log("login successfull!", userinfo);

          Navigate("/home");

          successToast("login successfull!"); //todo: react toastify
        })
        .catch((error) => {
          console.log(`error is:${error}`);
        });
    }
  };

  // todo:login with google button functionality

  /**
   * todo:crud
   * !read and write data
   */

  const loginWithGoogle = () => {
    // alert("hi"); //todo:button working check

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userinfo) => {
        console.log("login with google successfull", userinfo);

        console.log(userinfo)
        const {user}=userinfo

        //store userdata in firebase realtime database
        let userRef =push(ref(db, 'users/'))
        set(userRef, {
          username: user.displayName || "Name Missing",// if saving problem occurs then it will show name missing 
          email: user.email || "Email missing",//if saving problem occurs then it will show email missing
          profile_picture: user.photoURL,
          userUid: user.uid,
        })

        
      }).then(()=>{
        Navigate('/home')
      })
      .catch((error) => {
        console.log(`error is : ${error}`);
      });
  };

  return (
    <div className="flex">
      <div className="LeftWrapper  w-1/2 h-[100vh] flex flex-col justify-center items-center ">
        <p className="text-[33.4px] font-bold text-black mb-5">
          Login to your account!
        </p>

        <div
          className="px-8 py-2  border-2 border-gray-400  mb-4 rounded-lg cursor-pointer flex gap-2"
          onClick={loginWithGoogle}
        >
          <FcGoogle className="w-[50px] h-[50px]" />

          <span className="font-semibold text-[16.4px] font-roboto_font mt-4 ">
            Login with Google
          </span>
        </div>

        <label className="font-roboto_font text-[20px] mt-4">
          Enter email address
        </label>
        <input
          type="email"
          id="email"
          onChange={handleInput}
          placeholder="youraddress@gmail.com"
          className="border-b-4 border-gray-300 mb-2"
        ></input>
        {loginInfoErr.emailErr && (
          <span className="text-red-600 font-bold font-roboto_font">
            {loginInfoErr.emailErr}
            {""}
          </span>
        )}
        <label className="font-roboto_font mt-4 text-[20px]">
          Enter your password
        </label>
        <input
          type="password"
          id="password"
          onChange={handleInput}
          placeholder="**********"
          className="border-b-4 border-gray-300 mb-2 "
        ></input>
        {loginInfoErr.passwordErr && (
          <span className="text-red-600 font-bold font-roboto_font">
            {loginInfoErr.passwordErr}
            {""}
          </span>
        )}
        <Button
          type={"submit"}
          design="py-2 px-22 rounded bg-secondary_color text-white font-roboto_font font-bold mt-10 cursor-pointer"
          content={"Login to Continue"}
          onClick={handleSignIn}
        />

        <p className="font-roboto_font mt-4">
          Don’t have an account ?
          <Link
            to={"/signup"}
            className="font-roboto_font text-different_color cursor-pointer ml-1 hover:text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>

      <div className="RightWrapper  w-1/2 h-[100vh] mt-[2%]">
        <Lottie animationData={SignInChatAnimation} />
      </div>
    </div>
  );
};

export default SignIn;
