import React from 'react'
import Sidebar from '../components/home_components/Sidebar'
import { Outlet } from 'react-router'
const rootlayout = () => {
  return (
    <div>
      <div className="flex justify-between flex-wrap">
        <Sidebar />
        <div className="w-[88%] h-[92dvh]  mt-7 mb-7 mr-2 rounded-xl">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default rootlayout
