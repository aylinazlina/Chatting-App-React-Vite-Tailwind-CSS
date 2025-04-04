import React from "react";
import Searchbar from "../components/home_components/Searchbar";
import GroupList from "../components/home_components/GroupList";
import FriendRequest from "../components/home_components/FriendRequest";
import Friends from "../components/home_components/Friends";
import Group from "../components/home_components/Group";
import UserList from "../components/home_components/UserList";
import BlockedUsers from "../components/home_components/BlockedUsers";
const Home = () => {
  return (
    <div className="flex justify-around">
      <div className="">
      
        <Searchbar />
        <GroupList />
        <FriendRequest />
      </div>

      <div className="flex flex-col">
    
        <Friends />
        <Group />
      </div>

      <div className="flex flex-col">
      <UserList />
      <BlockedUsers />
      </div>
    </div>
  );
};

export default Home;
