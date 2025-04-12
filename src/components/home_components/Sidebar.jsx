import React, { useEffect } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { BiMessageRoundedDots } from "react-icons/bi";
import { TbBell } from "react-icons/tb";
import { GoGear } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { getDatabase, ref, onValue, update } from "firebase/database";

import { getAuth, signOut } from "firebase/auth";

const Home_Components = () => {
  const auth = getAuth();
  const db = getDatabase();

  const navigationIcon = [
    {
      id: 1,
      path: "/home",
      icon: <IoHomeOutline />,
    },

    {
      id: 2,
      path: "/message",
      icon: <BiMessageRoundedDots />,
    },
    {
      id: 3,
      path: "/notification",
      icon: <TbBell />,
    },
    {
      id: 4,
      path: "/settings",
      icon: <GoGear />,
    },

    {
      id: 5,
      icon: <FiLogOut />,
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  // console.log(location)
  //console.log(location.pathname)

  // todo:sideItem function
  const handleSideItem = (path = "/") => {
    navigate(path);
  };

  /**
   * todo:handleUploadIcon function
   *
   */

  // useEffect()
  const [count, setCount] = useState(0);

  const handleIncreament = () => {
    //setCount(count+1) or

    setCount((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://upload-widget.cloudinary.com/latest/global/all.js";
    script.async = true;
    script.onload = () => {
      console.log("Cloudinary script loaded");
    };
    document.body.appendChild(script);
  }, []);

  const handleUploadIcon = () => {
    if (window.cloudinary) {
      window.cloudinary.openUploadWidget(
        {
          cloudName: "dfh0f2pmu",
          uploadPreset: "chatting_app",
          sources: [
            "local",
            "url",
            "camera",
            "dropbox",
            "gettyimages",
            "unsplash",
            "google_drive",
            "image_search",
          ],
          googleApiKey: "AIzaSyBEs8X_6kR9W6wi__K3E9MA6Y0v4CGbS9Y",
          searchBySites: ["all", "cloudinary.com"],
          searchByRights: true,
        },
        (error, result) => {
          if (error) {
            console.error("Upload Error:", error);
            return;
          }
          if (result && result.event === "success") {
            console.log("Uploaded Image URL:", result.info.secure_url); // ← Log the secure URL here

            //profile pic update
            update(ref(db,`users/${userdata.userKey}`),{
              profile_picture:result?.info?.secure_url
            });
          }
        }
      );
    } else {
      alert("Upload widget not ready yet. Please wait...");
    }
  };

  console.log(window.cloudinary);

  //todo: handlelogOut function

  const handlelogOut = () => {
    //alert("hi!")

    const auth = getAuth();

    signOut(auth)
      .then((result) => {
        console.log("Result: ", result);

        navigate("/signin");
      })
      .catch((error) => {
        console.log(`Error from sign out function :${error}`);
      });
  };

  //  console.log(auth.currentUser)

  //fetch the userdata from user database

  const [userdata, setuserdata] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const fetchData = () => {
      const UserRef = ref(db, "users/");
      onValue(UserRef, (snapshot) => {
        let userblankinfo = null; // changed from const to let
        snapshot.forEach((item) => {
          if (item.val().userUid === auth.currentUser.uid) {
            userblankinfo = { ...item.val(), userKey: item.key };
          }
        });
        setuserdata(userblankinfo);
      });
    };
    fetchData();
  }, []);

  console.log("====================");
  console.log(userdata);

  return (
    <div>
      <div className="w-[130px] h-[92dvh] bg-secondary_color mt-7 mb-7 ml-7 rounded-2xl">
        <div className="flex flex-col justify-center items-center ">
          <div className="w-[80px] h-[80px] mt-7 mb-10 rounded-[50%] cursor-pointer relative group">
            <picture>
              <img
                src={
                  userdata
                    ? userdata.profile_picture
                    : "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="image"
                className="object-cover w-full h-full rounded-full"
              />
            </picture>
            <span
              className="hidden group-hover:block text-white font-bold text-[32px] absolute translate-1/2 top-[7%] left-[13%]"
              onClick={handleUploadIcon}
            >
              <IoCloudUploadOutline />
            </span>

            <p className="font-roboto_font text-white text-[18px] ml-3">
              {userdata ? userdata.username : "missing"}
            </p>

            {/* <span>{count}</span>
            <button onClick={handleIncreament} className="bg-red-400">+</button> */}
          </div>

          {/* =========navigation icons ======== */}
          <div className="flex flex-col gap-y-12">
            {navigationIcon?.map((item, index) =>
              navigationIcon.length - 1 == index ? (
                <div
                  onClick={handlelogOut}
                  className="text-white text-[40px] mt-13 cursor-pointer"
                  key={item.id}
                >
                  <div className="" onClick={handleSideItem}>
                    {item.icon}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-y-12 ">
                  <Link
                    to={item.path}
                    className="text-white text-[40px]"
                    key={item.id}
                  >
                    <div
                      className={
                        item.path === location.pathname
                          ? `cursor-pointer text-secondary_color active `
                          : `cursor-pointer`
                      }
                      onClick={handleSideItem}
                    >
                      {item.icon}
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>

          {/* =========navigation icons ======== */}
        </div>
      </div>
    </div>
  );
};

export default Home_Components;
