import React from "react";
import SideNavbar from "../components/home_components/SideNavbar";
const Home = () => {
  return (
    <div>
      <div className="flex justify-between flex-wrap">
        <SideNavbar />
        <div className="w-[86%] h-[92vh]  mt-7 mb-7 mr-6 bg-amber-300 rounded-xl"> right</div>
      </div>
    </div>
  );
};

export default Home;
