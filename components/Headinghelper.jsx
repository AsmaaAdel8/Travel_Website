import React from "react";

function Headinghelper({ header }) {
  return (
    <div className="w-[80%] mx-auto mb-5">
      <h1 className="text-xl sm:text-3xl font-bold text-blue-950">{header}</h1>
      <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium">
        Lorem ipsum dolor sit amet consectetur.
      </p>
    </div>
  );
}

export default Headinghelper;
