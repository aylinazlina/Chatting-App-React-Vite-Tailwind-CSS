import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import Button from "../common_component/Button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import UserSkeleton from "./skeleton/UserSkeleton";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import {successToast} from '../../Toastify.js'
import moment from 'moment/moment';
import {getTimeNow}  from "../../lib/lib.js";


const UserList = () => {
  const db = getDatabase();
  const auth = getAuth();
  const [loading, setLoading] = useState(true);
  const [userlist, setUserlist] = useState([]); // Changed to empty array
  const [loggeduser, setLoggedUser] = useState([]);

 

  useEffect(() => {
    const auth = getAuth();
    const fetchData = () => {
      const UserRef = ref(db, "users/"); //database network establish
      onValue(
        UserRef,
        (snapshot) => {
          const users = [];
          snapshot.forEach((item) => {
            // Skip the current user and only include others
            if (item.val().userUid !== auth.currentUser?.uid) {
              users.push({
                id: item.key,
                username:
                  item.val().username || item.val().displayName || "User",
                profile_picture:
                  item.val().photoURL ||
                  item.val().profile_picture ||
                  "https://via.placeholder.com/150",
                email: item.val().email || "", // ✅ Add this
                userKey: item.key, // ✅ Add this

                time: "Recently active", // Default value, replace with actual last active time if available
              });
            } else {
              //  let user =Object.assign({
              //   id: item.key,
              //   username: item.val().username || item.val().displayName || "User",
              //   profile_picture: item.val().photoURL || item.val().profile_picture || "https://via.placeholder.com/150",
              //   time: "Recently active" // Default value, replace with actual last active time if available
              //  },

              let user = {
                id: item.key,
                username:
                  item.val().username || item.val().displayName || "User",
                profile_picture:
                  item.val().photoURL ||
                  item.val().profile_picture ||
                  "https://via.placeholder.com/150",
                email: item.val().email || "",
                userKey: item.key,
                time: "Recently active",
              };
              setLoggedUser(user);
            }
          });
          setUserlist(users);
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      );
    };
    fetchData();

    //todo: clean up function => server cost komanor jonno(ekta jsx onno jsx er sath kono karone connect thakle amra onno page e thakleo network rquest pathai tokhon sever cost bere jai)

    return () => {
      const UserRef = ref(db, "users/");

      // off(UserRef)
    };
  }, [db]);


 


  if (loading) {
    return <UserSkeleton />;
  }
  console.log(auth.currentUser);

  console.log("====================");
  console.log(userlist);

  const groups = [
    {
      id: 1,
      name: "Taufik Islam",
      text: "Dinner?",
      time: "Today, 8:56pm",
      group_img:
        "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Azlina Arabi",
      text: "Sure!",
      time: "Yesterday, 1:56am",
      group_img:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Ankita Hossain",
      text: "Hi.....",
      time: "Today, 5:56pm",
      group_img:
        "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Aylin Hossain",
      text: "I will call him today.",
      time: "Tomorrow, 3:56pm",
      group_img:
        "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "Anushka Hossain",
      text: "Life!",
      time: "Today, 7:50pm",
      group_img:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      name: "Lawrance D'cruze",
      text: "Happy",
      time: "Today, 11:56pm",
      group_img:
        "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      name: "Tanjil Haque",
      text: "Handsome",
      time: "Today, 4:26pm",
      group_img:
        "https://images.pexels.com/photos/868113/pexels-photo-868113.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      name: "Abu Sayeed",
      text: "Nature",
      time: "Yesterday, 2:00pm",
      group_img:
        "https://images.pexels.com/photos/761115/pexels-photo-761115.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 9,
      name: "Saimun Hasan",
      text: "Coding",
      time: "Today, 3:40pm",
      group_img:
        "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 10,
      name: "Nur The Dev",
      text: "Apu Bishwas",
      time: "Today, 1:44pm",
      group_img:
        "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  console.log("hello", loggeduser);
  console.log(moment().format("dd, MM DD YYYY, h:mm a"));

  // todo:handlePlusButton function,param =>item

  const handlePlusButton = (item = {}) => {
   /* let userinfo ={
      name :"mern",
      id:123,
    }
    // localStorage.setItem('Information',JSON.stringify(userinfo))

   const jsonData= JSON.stringify(userinfo)
  // console.log(jsonData);
    const userInfobj=JSON.parse(jsonData)
    console.log(userInfobj);

    return */

    console.log("hi", item);
    set(push(ref(db, "friendRequest/")), {
      // sendfriendRequest: "lizubev",
      // receivedFriendRequest: "rujynahok",
      senderId: loggeduser.id || auth.currentUser.uid,
      senderEmail: loggeduser.email,
      senderProfile_pic: loggeduser.profile_picture,
      senderUserKey: loggeduser.userKey,
      senderUserName: loggeduser.username,

      receiverId: item.id,
      receiverEmail: item.email,
      receiverProfile_pic: item.profile_picture,
      receiverUserKey: item.userKey,
      receiverUserName: item.username,

      // createdAt:moment().format("dd, MM DD YYYY, h:mm a"),

      createdAt:getTimeNow(),

    }).then(() => {
      set(push(ref(db, "notification/")), {
        notificationMsgSent: `${loggeduser.username} send a friend request`,
        senderProfile_pic: loggeduser.profile_picture,
        createdAt:getTimeNow(),
      });
    }).then(()=>{
      successToast(`${loggeduser.username} send a friend request`,"top-center")
    }).then(()=>{

        let userInfo ={
          FRId:loggeduser.id +item.id
        
       }

       //now store the data in LocalStorage
       localStorage.setItem('SenderReceiverId',JSON.stringify(userInfo))
       
    })
  };

  //get SenderReceiverId from localStorage
 const SenderReceiverId =localStorage.getItem('SenderReceiverId')
 const SenderReceiverIdObj=JSON.parse(SenderReceiverId)
 console.log(SenderReceiverIdObj.FRId)

  return (
    <div>
      <div className="w-[25dvw] h-[43dvh] rounded-xl border-2 border-gray-200 shadow-xl overflow-hidden">
        <div className="flex py-2">
          <p className="ml-6 mt-4 font-roboto_font font-bold text-[18px]">
            User List({userlist.length})
          </p>
          <span className="ml-auto mt-4 text-secondary_color">
            <HiDotsVertical size={22} />
          </span>
        </div>

        <div className="w-full h-full overflow-y-auto">
          {userlist.map((item, index) => (
            <div
              className={
                index === userlist.length - 1
                  ? `flex justify-around pb-12 mt-2 cursor-pointer`
                  : `flex justify-around border-b-2 border-gray-300 pb-2 mt-2 cursor-pointer`
              }
              key={item.userUid}
            >
              <div className="w-[50px] h-[50px] rounded-full">
                <picture>
                  <img
                    src={item.profile_picture}
                    alt="user profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </picture>
              </div>
              <div>
                <p className="font-roboto_font mr-7 font-semibold">
                  {item.username}
                </p>
                <p className="font-roboto_font font-normal text-[13px] text-gray-300">
                  {item.time}
                </p>
              </div>
              {SenderReceiverIdObj?.FRId ==loggeduser.id +item.id ? (<Button
                design="px-4 py-1 bg-secondary_color text-white font-bold text-[22px] font-roboto_font rounded-md cursor-pointer"
                content={<FaMinus />}
               
              />):(<Button
                design="px-4 py-1 bg-secondary_color text-white font-bold text-[22px] font-roboto_font rounded-md cursor-pointer"
                content={<FaPlus />}
                onClick={() => handlePlusButton(item)}
              />)}
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
