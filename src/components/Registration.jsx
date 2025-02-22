import React from "react";
import Lottie from "lottie-react";
import Heading from "../components/common_component/Heading";
import chatAnimation from "../assets/lottieAnimation.json";
import InputField from './common_component/InputField';
import {inputSource} from '../lib/InputSource.js'
import { useState } from "react";
import { PiEyeClosedDuotone } from "react-icons/pi";


const Registration = () => {

  const [name,setName] = useState("");
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const [confirmPass,setConfirmPass] =useState("");
  const [showPassword,setShowPassword] =useState(false); 
  const input=inputSource();

  /**
   * todo:handleInput function;
   * @param {event} event-The input event
   * @return null
   * The handleInput function in JavaScript React sets the value based one the input event.
   *  */ 

   const handleInput=(event)=>{

      	const {name,value} =event.target;

        if(name == "Username"){
          setName(value);
        }else if(name == "Email"){
          setEmail(value);
        }else if(name == "Password"){
          setPassword(value);
        }else if(name == "Confirm Password"){
          setConfirmPass(value);
        }

      };

      
      /** 
       * todo: ShowPass function;
       * @param ({})
       * @return null
      */

     const getPasswordShow=()=>{
        setShowPassword(!showPassword);
        //console.log(showPassword);
      };




  return (
    <div className="flex py-20">
      <div className="left w-[55%] bg-white">
        <div className="flex flex-col justify-center items-center h-full">
          <Heading content="Get started with easily register" />
          <p className="font-normal font-heading_font leading-[28px] text-[21px] text-secondary_text_color opacity-42 pt-4">
            Free register and you can enjoy it
          </p>
          
        </div>

        <div className="w-1/2">
        {input.map((data)=>(
          <div key ={data.id} className="" >
            {data.type!== "password"?(
              <InputField name={data.name} type={data.type} className="w-full border-yellow-300 px-14 border-t-2 focus:outline-0 focus:border-red-500"
               onChange={handleInput} />
            ):(
              <InputField name={data.name} type={!showPassword ? data.type:"text"}
              className="w-full border-yellow-300 px-14 border-t-2 focus:outline-0 focus:border-red-500"
              >
               <PiEyeClosedDuotone onClick={getPasswordShow} /> 
                </InputField>
            )}
          </div>
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
