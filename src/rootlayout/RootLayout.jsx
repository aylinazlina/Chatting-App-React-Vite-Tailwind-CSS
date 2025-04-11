import React from "react";
import Sidebar from "../components/home_components/Sidebar";
import { Outlet } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import ValidationError from "../pages/error/ValidationError";
import { useState } from "react";
import { useNavigate } from "react-router";

const rootlayout = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [isUserVerified, setIsUserVerified] = useState(null); // null = loading

  useEffect(() => {
    let intervalId;

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user.reload();
        if (user.emailVerified) {
          setIsUserVerified(true);
        } else {
          setIsUserVerified(false);

          // 🕒 Start polling every 5 seconds
          intervalId = setInterval(async () => {
            await user.reload();
            if (user.emailVerified) {
              setIsUserVerified(true);
              clearInterval(intervalId); // ✅ Stop polling when verified
            }
          }, 5000);
        }
      } else {
        navigate("/signin");
      }
    });

    return () => {
      unsubscribe();
      clearInterval(intervalId);
    };
  }, [auth, navigate]);

  if (isUserVerified === null) {
    return <div>Loading...</div>; // or spinner
  }

  return (
    <div>
      {isUserVerified ? (
        <div className="flex justify-between flex-wrap">
          <Sidebar />
          <div className="w-[88%] h-[92dvh] mt-7 mb-7 mr-2 rounded-xl">
            <Outlet />
          </div>
        </div>
      ) : (
        <ValidationError />
      )}
    </div>
  );


};

export default rootlayout;
