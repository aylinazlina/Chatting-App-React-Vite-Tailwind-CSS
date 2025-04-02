import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { BiMessageRoundedDots } from "react-icons/bi";
import { TbBell } from "react-icons/tb";
import { GoGear } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import {Link} from 'react-router'
const Home_Components = () => {
  const navigationIcon = [
    {
      id: 1,
      icon: <IoHomeOutline />,
    },

    {
      id: 2,
      icon: <BiMessageRoundedDots />,
    },
    {
      id: 3,
      icon: <TbBell />,
    },
    {
      id: 4,
      icon: <GoGear />,
    },

    {
      id: 5,
      icon: <FiLogOut />,
    },
  ];

  return (
    <div>
      <div className="w-[130px] h-[92vh] bg-secondary_color mt-7 mb-7 ml-7 rounded-2xl">
        <div className="flex flex-col justify-center items-center ">
          <div className="w-[80px] h-[80px] mt-7 mb-10 rounded-[50%] cursor-pointer relative group">
            <picture>
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="image"
                className="object-cover w-full h-full rounded-full"
              />
            </picture>
            <span className="hidden group-hover:block text-white font-bold text-[32px] absolute translate-1/2 top-[7%] left-[13%]">
              <IoCloudUploadOutline />
            </span>
          </div>

          {/* =========navigation icons ======== */}
          <div className="flex flex-col gap-y-12">
            {navigationIcon?.map((item,index) => (

              navigationIcon.length -1 == index ? (
                <Link className="text-white text-[40px] active mt-13" key={item.id}>
                 {item.icon}
                </Link>
              ):(
                <div className="flex flex-col gap-y-12">
                <Link className="text-white text-[40px]">
                 {item.icon}
                </Link>
                </div>
              )
              
            ))}
            
          </div>

          {/* =========navigation icons ======== */}
        </div>
      </div>
    </div>
  );
};

export default Home_Components;
