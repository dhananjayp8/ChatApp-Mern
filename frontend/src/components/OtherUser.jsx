import React from "react";

const OtherUser = () => {
  return (
    <div>
      <div className="flex gap-2 items-center text-white hover:text-zinc-900 hover:bg-zinc-200 rounded p-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full"></div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between gap-2 ">
            <p>Xyxxzz</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 m-1"></div>
    </div>
  );
};

export default OtherUser;
