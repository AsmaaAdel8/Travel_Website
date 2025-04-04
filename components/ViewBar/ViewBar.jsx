import React from "react";
import Headinghelper from "../Headinghelper";
import DestinationSlider from "./DestinationSlider";

function ViewBar() {
  return (
    <div className="pt-[105vh] ">
      <Headinghelper header={"Explore Popular Destination"}/>
      {/* slider section */}
      <div className="w-[90%] m-auto">
        <DestinationSlider/>
      </div>
    </div>
  );
}

export default ViewBar;
