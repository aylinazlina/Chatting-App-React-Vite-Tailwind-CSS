import React from "react";
import Sidebar from "../components/home_components/Sidebar";
import { Outlet } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import ValidationError from "../pages/error/ValidationError";
import { useState } from "react";
const rootlayout = () => {
  const auth = getAuth();
  let content = null;

  const [isuserverified, setisuserverified] = useState(false);
  useEffect(()=>{

    onAuthStateChanged(auth,(user)=>{
      setisuserverified(user.emailVerified)

    })

  },[])


 
console.log(isuserverified);


  return (<div className="">
    {isuserverified?(<div>
        <div className="flex justify-between flex-wrap">
          <Sidebar />
          <div className="w-[88%] h-[92dvh]  mt-7 mb-7 mr-2 rounded-xl">
            <Outlet />
          </div>
        </div>
      </div>):(<ValidationError/>)}
  </div>);
};

export default rootlayout;
