import React from "react";
import Searchbar from "../components/home_components/Searchbar";
import GroupList from "../components/home_components/GroupList";
import { HiDotsVertical } from "react-icons/hi";
import Friends from "../components/chatpage_components/Friends";
const Chat = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="leftWrapper w-[30dvw] h-[92dvh]">
          <Searchbar />
          <GroupList />
          <Friends />
        </div>
        <div className="right bg-amber-300 shadow-lg border-2 border-gray-100 w-[56dvw] rounded-2xl">
          <div className="flex mt-4">
          <div className="w-[70px] h-[70px] rounded-full ml-7 mr-5 ">
            <picture>
              <img
                src="https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="img"
                className="rounded-full object-cover w-full h-full"
              />
            </picture>
          </div>
         <div className="">
         <p className="font-roboto_font font-bold text-[22px] ">Azlina Arabi Hossain Aylin</p>
         <p className="font-roboto_font font-medium">Online</p>
         </div>

          <span className="font-roboto_font font-bold text-[22px] mt-2 text-secondary_color ml-97">
            <HiDotsVertical />
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
