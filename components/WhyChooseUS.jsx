import React from "react";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import Headinghelper from "./Headinghelper";

function WhyChooseUS() {
  return (
    <div className="mt-[3%] p-7">
      <Headinghelper header={"Why Choose Us"} />
      <div className="flex flex-row space-x-4 items-center mt-8 p-5 text-center">
        <div className="lg:w-[35%] md:w-[30%]">
          <img
            draggable="false"
            src="/images/trust.png"
            width={"35%"}
            className="m-auto"
          />
          <div className="text-[15px]">
            <h1>Best Price Guarantee</h1>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
          </div>
        </div>
        <div className="lg:w-[35%] md:w-[30%]">
          <img
            draggable="false"
            src="/images/booking.jpg"
            width={"35%"}
            className="m-auto"
          />
          <div className="text-[15px]">
            <h1>Easy & Quick Booking</h1>
            <h4>Lorem ipsum dolor adipisicing elit.</h4>
          </div>
        </div>
        <div className="lg:w-[35%] md:w-[30%]">
          <BsGlobeEuropeAfrica className="h-[50%] w-[35%] mb-3 m-auto" />
          <div className="text-[15px]">
            <h1>Customer Care 24/7</h1>
            <h4>Lorem ipsum dolor sit adipisicing elit.</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUS;
