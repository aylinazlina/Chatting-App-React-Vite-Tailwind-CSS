import React from 'react'
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
const Searchbar = () => {
  return (
    <div>
      <form>
      <div className='w-[30dvw] h-[5dvh] bg-white border-b-2 border-l-2 border-r-2 border-gray-200 shadow-2xl rounded-lg'>

<div className='flex'>
<span className=' ml-6 mr-6 mt-2 font-roboto_font font-bold'><FaSearch /></span>
   <p className='font-roboto_font font-normal text-[18px] text-gray-300'>Search</p>
   <span className='ml-72 font-roboto_font font-bold text-[22px] mt-2 text-secondary_color'><HiDotsVertical /></span>
</div>
 </div>
      </form>
    </div>
  )
}

export default Searchbar
