import React from "react";
import { useState } from "react";
import Lottie from "lottie-react";
import Heading from "../components/common_component/Heading";
import chatAnimation from "../assets/SignUpLottieAnimation.json";
import { inputSourceData } from "../lib/InputSource";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { toast, Bounce } from "react-toastify";
import { HashLoader } from "react-spinners";
import {Link} from 'react-router'
import { getDatabase,push, ref, set } from "firebase/database";
import { useNavigate } from "react-router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

import Button from "../components/common_component/Button";

const Registration = () => {

  const db = getDatabase();
  const Navigate=useNavigate();

  const item = inputSourceData();
  console.log(item);

  const auth = getAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [eye, setEye] = useState(false);

  const [loading, setLoading] = useState(false);

  const [usernameError, setusernameError] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  console.log("username", username);

  console.log(username, password, email); //info in console

  /**
   * todo:handleEye
   * @param:{(event)}
   */

  const handleEye = (event) => {
    setEye(!eye);
  };

  /**
   * todo:handleInput function Implement
   * @param ({event})
   * return : null
   */

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name == "email") {
      setEmail(value);
    } else if (name == "password") {
      setPassword(value);
    } else {
      setConfirmPass(value);
    }
  };
  console.log("username", username);

  /*
  todo:handleSignUp function implement
  **params:
  **motive:
  **return:null
  */

  const handleSignUp = () => {
    if (!username) {
      setusernameError("username missing !");
    } else if (!email) {
      setemailError("email is missing !");
    } else if (!password) {
      setpasswordError("passoword is missing !");
    } else {
      setLoading(true);

      // alert("everything is fine");
      createUserWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          console.log("user created successfully", userinfo);
          updateProfile(auth.currentUser, {
            displayName: username || "Jane Q. User",
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          });
        })
        .then(() => {
          toast.success(`🚀 ${username},Your Account Created Successfully !`, {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        })
        .then(() => {
          return sendEmailVerification(auth.currentUser);
          

        }).then(()=>{

         let userRef =push(ref(db, 'users/'))
          set(userRef, {
            username: auth.currentUser.displayName || username,
            email: auth.currentUser.email || email,
            profile_picture : `https://images.pexels.com/photos/31418360/pexels-photo-31418360/free-photo-of-serene-view-of-mount-fuji-with-cherry-blossoms.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
            userUid:auth.currentUser.uid
          })
        })
        .then((mailInfo) => {
          console.log("mail send !", mailInfo);

          toast.info("🦄 verification mail send to your email !", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,

          });

          Navigate('/signin');

         
        })
        .catch((err) => {
          console.log(
            `error from createUserWithEmailAndPassword function  ${err.code} `
          );
        })
        .finally(() => {

          setLoading(false);
          console.log("ok");
          setUsername("");
          setEmail("");
          setPassword("");
        });
    }
  };

  // console.log(auth.currentUser.emailVerified)
  console.log(usernameError, emailError, passwordError); //showing the error in console

  //  console.log(auth.currentUser) //recent je signup korse tar info
  //  console.log(auth.currentUser.displayName)//recent je signup korse tar specific info

  return (
    <div className="flex py-20">
      <div className="left w-[55%] bg-white">
        <div className="flex flex-col justify-center items-center h-full">
          <Heading content="Get started with easily register" />
          <p className="font-normal font-heading_font leading-[28px] text-[21px] text-secondary_text_color opacity-42 pt-4 mb-4">
            Free register and you can enjoy it
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            {item?.map((item) =>
              item.type == "password" ? (
                <div className="flex flex-col gap-2 relative">
                  <label className=" text-black font_roboto_font font-bold text-[21px] ">
                    Your {item.name} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type={eye ? "text" : "password"}
                    className="py-2 px-4 border border-gray-400 rounded-xl mb-2 "
                    name={item.name}
                  
                    placeholder={`Enter your ${item.name}`}
                    onChange={handleInput}
                    value={password}
                  />
                  {item.name == "password" && password == "" ? (
                    <span className="text-red-600 font-roboto_font">
                      {!password && passwordError}
                    </span>
                  ) : (
                    " "
                  )}

                  <span
                    className="absolute right-0 top-11 translate-y-[50%] cursor-pointer"
                    onClick={handleEye} //this onClick will triger eye icon in the website
                  >
                    {eye ? <IoIosEye /> : <IoIosEyeOff />}
                  </span>
                </div>
              ) : (
                (item.name == "username" ? (<div className="flex flex-col gap-2">
                  <label className=" text-black font_roboto_font font-bold text-[21px] mt-1">
                    Your {item.name} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type={
                      item.name.toLocaleLowerCase() ==
                      "email".toLocaleLowerCase()
                        ? "email"
                        : item.name == "username"
                        ? "text"
                        : "password"
                    }
                    className="py-2 px-4 border border-gray-400 rounded-xl mb-2"
                    name={item.name}
                    placeholder={`Enter your ${item.name}`}
                    onChange={handleInput}
                    value ={username}
                    
                  /> 
                  {item.name === "email" && email == "" ? (
                    <span className="text-red-600 font-roboto_font">
                      {!email && emailError}
                    </span>
                  ) : item.name === "username" && username == "" ? (
                    <span className="text-red-600 font-roboto_font">
                      {!username && usernameError}
                    </span>
                  ) : (
                    ""
                  )}
                </div>) : (<div className="flex flex-col gap-2">
                  <label className=" text-black font_roboto_font font-bold text-[21px] mt-1">
                    Your {item.name} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type={
                      item.name.toLocaleLowerCase() ==
                      "email".toLocaleLowerCase()
                        ? "email"
                        : item.name == "username"
                        ? "text"
                        : "password"
                    }
                    className="py-2 px-4 border border-gray-400 rounded-xl mb-2"
                    name={item.name}
                    placeholder={`Enter your ${item.name}`}
                    onChange={handleInput}
                    value={email}
                    
                  /> 
                  {item.name === "email" && email == "" ? (
                    <span className="text-red-600 font-roboto_font">
                      {!email && emailError}
                    </span>
                  ) : item.name === "username" && username == "" ? (
                    <span className="text-red-600 font-roboto_font">
                      {!username && usernameError}
                    </span>
                  ) : (
                    ""
                  )}
                </div>) )
              )
            )}
            {loading ? (
              <Button
                design="px-22 py-2 bg-secondary_color text-background_color font-roboto_font rounded capitalize mt-4 cursor-pointer text-lg"
                 
                content={<HashLoader
                  color="#ffffff"
                  size={25}
                  speedMultiplier={2}
                />}
              />
            ) : (
              <Button
                design="px-22 py-2 bg-secondary_color text-background_color font-roboto_font rounded capitalize mt-4 cursor-pointer text-lg"
                onClick={handleSignUp} //this onclick is similar to addeventlistener
                content="sign up"
              />
            )}

            <p className="font-medium text-[16.4px] mt-4">
              Already have an account ? 
              <Link to={'/signin'} className="text-different_color hover:text-blue-600 ml-1 hover:underline"> Sign In</Link>{" "}
            </p>
          </form>
        </div>
      </div>

      <div className="Right w-[45%] mt-[7%]">
        <Lottie animationData={chatAnimation} />
      </div>
    </div>
  );
};

export default Registration;
