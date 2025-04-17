import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
function StartHere() {
  return <div className="bg-slate-900 h-[50vh] my-auto xl:mt-1 mt-[-39%]">
    <div className="w-[90%] m-auto text-center text-white mt-5 leading-10">
      <HiOutlineMailOpen className="w-12 h-12 mx-auto mt-4" />
      <h1 className="font-bold uppercase">Your travel journey starts here</h1>
      <h1 className="text-sm font-medium mb-4">Sign Up and will sind the best chance to you</h1>
      <input
        type="text"
        placeholder="Email"
        className="rounded outline-none w-[50vw] m-auto p-2 mb-2"
      />
      <button className="rounded outline-none w-[50vw] m-auto p-2 bg-blue-950 ">
        Subscribe
      </button>
    </div>
  </div>;
}

export default StartHere;
