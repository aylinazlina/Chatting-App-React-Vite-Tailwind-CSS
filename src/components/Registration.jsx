import React from "react";
import { useState } from "react";
import Lottie from "lottie-react";
import Heading from "../components/common_component/Heading";
import chatAnimation from "../assets/lottieAnimation.json";
import { inputSourceData } from "../lib/InputSource";
import { IoIosEye } from "react-icons/io";

const Registration = () => {
  const item = inputSourceData();
  console.log(item)
  
  const [username,setUsername] =useState("");
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const [confirmPassword,setConfirmPass] =useState("");
  const [eye,setEye]=useState(false);  

  console.log("username" ,username);

/**
 * todo:handleEye
 * @param:{(event)}
 */

const handleEye=(event)=>{
  setEye(!eye);
  


}




  /**
   * todo:handleInput function Implement
   * @param ({event})
   * return : null
   */

  const handleInput=(event)=>{
    
    const {name,value}=event.target
    if(name === "username"){
      setUsername(value)
    }else if(name == "email")
    {
      setEmail(value)
    }else if(name == "password")
    {
      setPassword(value)
    }else{
      setConfirmPass(value)
    }
  }
  console.log("username",username)

  return (
    <div className="flex py-20">
      <div className="left w-[55%] bg-white">
        <div className="flex flex-col justify-center items-center h-full">
          <Heading content="Get started with easily register" />
          <p className="font-normal font-heading_font leading-[28px] text-[21px] text-secondary_text_color opacity-42 pt-4 mb-4">
            Free register and you can enjoy it
          </p>

          {item?.map((item) => (
            item.type == "password" ? (<div className="flex flex-col gap-2 relative">
              <label className=" text-black font_roboto_font font-bold text-[21px] "> 
                
                Your {item.name} <span className="text-red-600">*</span>
              </label>
              <input
                type={eye?"text" : "password"}
                className="py-2 px-4 border border-b-blue-900 rounded mb-2"
                name={item.name}
                placeholder={`Enter your ${item.name}`} onChange={handleInput}
              />
              <span className="absolute right-0 top-11 translate-y-[50%] cursor-pointer" onClick={handleEye}><IoIosEye /></span>
            </div>) :(
              <div className="flex flex-col gap-2">
              <label className=" text-black font_roboto_font font-bold text-[21px] ">
                
                Your {item.name} <span className="text-red-600">*</span>
              </label>
              <input
                type={item.name.toLocaleLowerCase() == 'email'.toLocaleLowerCase()? 'email': item.name == 'username'? 'text': 'password' }
                className="py-2 px-4 border border-b-blue-900 rounded mb-2"
                name={item.name}
                placeholder={`Enter your ${item.name}`} onChange={handleInput}
              />
            </div>)
            
          ))}
        </div>
      </div>

      <div className="Right w-[45%]">
        <Lottie animationData={chatAnimation} />
      </div>
    </div>
  );
};

export default Registration;
