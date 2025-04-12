import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
const Searchbar = () => {
  return (
    <div>
      <form className="flex items-center max-w-lg mx-auto">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <span className="font-roboto_font font-bold text-gray-500">
              <FaSearch />
            </span>
            <p className="font-roboto_font font-bold text-[16px] ml-5 text-gray-400">Search</p>
          </div>
          <input
            type="text"
            className="w-[30dvw] h-[5dvh] bg-white border-b-2 border-l-2 border-r-2 border-t-2 border-gray-200 shadow-2xl rounded-lg"
          />
          <div
           
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            <span className="absolute inset-y-0 end-0 flex items-center pe-3 font-roboto_font font-bold text-[22px]  text-secondary_color cursor-pointer">
              <HiDotsVertical />
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
