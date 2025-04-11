import React from "react";

const UserSkeleton = () => {
  
  return (
    <div>
      <div className="w-[25dvw] h-[43dvh] rounded-xl border-2 border-gray-200 shadow-xl overflow-hidden">
        {/* Header skeleton */}
        <div className="flex py-2">
          <div className="ml-6 mt-4 h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
          <div className="ml-auto mt-4 h-6 w-6 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Scrollable content skeleton */}
        <div className="w-full h-full overflow-auto">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`flex justify-around items-center ${
                index !== 4 ? "border-b-2 border-gray-200" : ""
              } py-3 px-2`}
            >
              <div className="w-[50px] h-[50px] rounded-full bg-gray-200 animate-pulse"></div>
              <div className="flex-1 ml-3">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSkeleton;
