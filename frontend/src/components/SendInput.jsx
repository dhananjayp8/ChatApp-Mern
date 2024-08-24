import React from "react";
import { IoSend } from "react-icons/io5";

const SendInput = () => {
  return (
    <form className="px-4 my-4">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message..."
          className="border p-3 border-zinc-500 text-sm rounded-lg block w-full bg-gray-600 text-white"
        />
        <button className="absolute flex items-center inset-y-0 end-0 p-4">
          <IoSend />
        </button>
      </div>
    </form>
  );
};

export default SendInput;
