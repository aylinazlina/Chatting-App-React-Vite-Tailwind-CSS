import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import Button from "../common_component/Button";

const GroupList = () => {
  const groups = [
    {
      id: 1,
      name: "Friends Reunion",
      text: "Hi Guys, Wassup!",
      group_img:
        "https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Friends Forever",
      text: "Good to see you.",
      group_img:
        "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Crazy Cousins",
      text: "What plans today?",
      group_img:
        "https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Uni Reunion",
      text: "uniFriends!",
      group_img:
        "https://images.pexels.com/photos/1974927/pexels-photo-1974927.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "SchoolMates",
      text: "school friends",
      group_img:
        "https://images.pexels.com/photos/1037989/pexels-photo-1037989.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      name: "Collegues love",
      text: "Living with them",
      group_img:
        "https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      name: "Neigbours Fun",
      text: "my Neigbours",
      group_img:
        "https://images.pexels.com/photos/1267693/pexels-photo-1267693.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      name: "gym buddies",
      text: "Hi gym buddies!",
      group_img:
        "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 9,
      name: "jokes all time",
      text: "Hi Guys, Wassup!",
      group_img:
        "https://images.pexels.com/photos/1139370/pexels-photo-1139370.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 10,
      name: "meems friend",
      text: "Hi Guys, Wassup!",
      group_img:
        "https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div>
      <div className="w-[30dvw] h-[34dvh] mt-8 rounded-xl border-2 border-gray-200 shadow-xl overflow-hidden">
        <div className="flex  py-2">
          <p className="ml-6 font-roboto_font font-bold text-[18px]">
            Groups List({groups.length})
          </p>
          <span className="font-roboto_font font-bold text-[22px] mt-2 text-secondary_color ml-66">
            <HiDotsVertical />
          </span>
        </div>

        <div className="w-full h-[90%] overflow-y-auto">
          {/* groups */}
          {groups?.map((item) => (
            <div
              className={
                item.id === groups.length
                  ? `flex justify-around  pb-8 mt-2 cursor-pointer`
                  : `flex justify-around border-b-2 border-gray-300 pb-2 mt-2 cursor-pointer`
              }
              key={item.id}
            >
              <div className="w-[50px] h-[50px] rounded-full ml-4 ">
                <picture>
                  <img
                    src={item.group_img}
                    alt="img"
                    className="w-full h-full rounded-full object-cover"
                  />
                </picture>
              </div>
              <div>
                <p className="font-roboto_font mr-28 font-semibold">
                  {item.name}
                </p>
                <p className="font-roboto_font  font-normal text-[13px] text-gray-300">
                  {item.text}
                </p>
              </div>
              <Button
                design="px-6  py-1 bg-secondary_color text-white font-bold font-roboto_font rounded-md cursor-pointer"
                content={"Join"}
              />
            </div>
          ))}

          {/* groups */}
        </div>
      </div>
    </div>
  );
};

export default GroupList;
