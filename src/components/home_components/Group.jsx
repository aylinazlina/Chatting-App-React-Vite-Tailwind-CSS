import React from 'react'
import { HiDotsVertical } from "react-icons/hi";


const Group = () => {

    const groups = [
        {
          id: 1,
          name: "Taufik Islam",
          text: "Dinner?",
          time:"Today, 8:56pm",
          group_img:
            "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 2,
          name: "Azlina Arabi",
          text: "Sure!",
          time:"Yesterday, 1:56am",
          group_img:
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 3,
          name: "Ankita Hossain",
          text: "Hi.....",
          time:"Today, 5:56pm",
          group_img:
            "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 4,
          name: "Aylin Hossain",
          text: "I will call him today.",
          time:"Tomorrow, 3:56pm",
          group_img:
            "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 5,
          name: "Anushka Hossain",
          text: "Life!",
          time:"Today, 7:50pm",
          group_img:
            "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 6,
            name: "Lawrance D'cruze",
            text: "Happy",
            time:"Today, 11:56pm",
            group_img:
              "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        {
          id: 7,
          name: "Tanjil Haque",
          text: "Handsome",
          time:"Today, 4:26pm",
          group_img:
            "https://images.pexels.com/photos/868113/pexels-photo-868113.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 8,
          name: "Abu Sayeed",
          text: "Nature",
          time:"Yesterday, 2:00pm",
          group_img:
            "https://images.pexels.com/photos/761115/pexels-photo-761115.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 9,
          name: "Saimun Hasan",
          text: "Coding",
          time:"Today, 3:40pm",
          group_img:
            "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 10,
          name: "Nur The Dev",
          text: "Apu Bishwas",
          time:"Today, 1:44pm",
          group_img:
            "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      ];

  return (
    <div>
      <div className="w-[25dvw] h-[43dvh] mt-9 rounded-xl border-2 border-gray-200 shadow-xl overflow-hidden">
              <div className="flex  py-2">
                
                <p className="ml-6 font-roboto_font font-bold text-[18px]">
                Group({groups.length})
                </p>
                <span className="font-roboto_font font-bold text-[22px] mt-2 text-secondary_color ml-59">
                  <HiDotsVertical />
                </span>
              </div>
              
      
            <div className='w-full h-[90%] overflow-auto'>
                {/* groups */}
              {groups?.map((item) => (
      
                <div className={item.id === groups.length? (`flex justify-around  pb-7 mt-2 cursor-pointer`):(`flex justify-around border-b-2 border-gray-300 pb-2 mt-2 cursor-pointer`)} key={item.id}
                 
                >
                  <div className="w-[50px] h-[50px] rounded-full ">
                    <picture>
                      <img
                        src={item.group_img}
                        alt="img"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </picture>
                  </div>
                  <div>
                    <p className="font-roboto_font mr-7 font-semibold">{item.name}</p>
                    <p className="font-roboto_font  font-medium text-[13px] text-gray-400">{item.text}</p>
                  </div>
                  <p className="font-roboto_font  font-medium text-[13px] text-gray-400">{item.time}</p>
                </div>
              ))}
      
              {/* groups */}
            </div>
            </div>
    </div>
  )
}

export default Group
