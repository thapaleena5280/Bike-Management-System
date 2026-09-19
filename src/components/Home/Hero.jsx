
import React from "react";
import { bike } from "./Images";

const Hero = () => {
  return (
    <div className="bg-white py-10">
      <div className="wrapper flex flex-col md:flex-row items-center justify-between gap-10 px-5">

        {/* Left Side */}
        <div className="text-left">

          <div className="w-16 h-1 bg-gray-600 mb-4"></div>

          <h1 className="text-4xl font-bold">
            WE PROVIDE
            <span className="text-[#025CA3]"> BIKES</span>
            <br />
            <span className="text-[#025CA3]">AND SCOOTERS</span> FOR RENT
          </h1>

          <p className="text-gray-600 mt-4">
            Book directly from local suppliers.
            <br />
            No Commissions, No Markups.
          </p>


        </div>

        {/* Right Side */}
        <div>
          <img
            src={bike}
            alt="Bike for rent"
            className="w-[300px] md:w-[500px]"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
