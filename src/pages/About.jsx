
import React from "react";
import { bike4 } from "../components/Home/Images";

const AboutUs = () => {
  return (
    <div className="bg-white px-4 md:px-12 py-12">

      {/* Heading */}
      <div className="flex items-center justify-center gap-3">
        <div className="h-1 w-8 bg-gray-400 rounded"></div>

        <h2 className="text-sm text-center font-semibold text-gray-500 tracking-widest">
          ABOUT US
        </h2>

        <div className="h-1 w-8 bg-gray-400 rounded"></div>
      </div>

      <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
        KNOW MORE <span className="text-[#025CA3]">ABOUT US</span>
      </h1>


      {/* Main About Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={bike4}
            alt="Bike Rental"
            className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* About Text */}
        <div className="w-full md:w-1/2">

          <p className="text-sm font-semibold tracking-widest text-[#025CA3] mb-2">
            KNOW ABOUT US
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            WHO WE ARE IN THE{" "}
            <span className="text-[#025CA3]">
              BIKE RENTAL INDUSTRY
            </span>
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4">
            Bike Management System is a simple and convenient platform
            created to make bike and scooter rental easier. We connect
            customers with rental services and provide an easy way to
            choose and rent a vehicle for their journey.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether you need a bike for a short trip, a daily journey,
            sightseeing, or exploring a new place, our platform helps
            you find a suitable vehicle quickly and easily.
          </p>

        </div>
      </div>


      {/* Mission and Vision */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

        {/* Mission */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-md">

          <h2 className="text-2xl font-bold text-[#025CA3] mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our mission is to provide a simple, affordable, and reliable
            bike rental experience. We want to make transportation easier
            by offering well-maintained bikes and a convenient rental
            process for everyone.
          </p>

        </div>


        {/* Vision */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-md">

          <h2 className="text-2xl font-bold text-[#025CA3] mb-4">
            Our Vision
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our vision is to build a trusted bike rental platform where
            customers can easily find, compare, and rent bikes. We aim to
            encourage convenient and eco-friendly transportation.
          </p>

        </div>

      </div>


      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto mt-16">

        <div className="text-center mb-10">

          <p className="text-sm font-semibold tracking-widest text-[#025CA3]">
            WHY CHOOSE US
          </p>

          <h2 className="text-3xl font-bold mt-2">
            WE MAKE BIKE RENTAL <span className="text-[#025CA3]">EASY</span>
          </h2>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="bg-white border rounded-xl p-6 text-center shadow-md">
            <h3 className="text-xl font-bold mb-3">
              Easy Booking
            </h3>

            <p className="text-gray-600">
              Simple and convenient process to choose and rent your bike.
            </p>
          </div>


          {/* Card 2 */}
          <div className="bg-white border rounded-xl p-6 text-center shadow-md">
            <h3 className="text-xl font-bold mb-3">
              Affordable Price
            </h3>

            <p className="text-gray-600">
              Flexible rental options at reasonable and affordable prices.
            </p>
          </div>


          {/* Card 3 */}
          <div className="bg-white border rounded-xl p-6 text-center shadow-md">
            <h3 className="text-xl font-bold mb-3">
              Quality Bikes
            </h3>

            <p className="text-gray-600">
              We focus on providing clean, safe, and well-maintained bikes.
            </p>
          </div>


          {/* Card 4 */}
          <div className="bg-white border rounded-xl p-6 text-center shadow-md">
            <h3 className="text-xl font-bold mb-3">
              Customer Support
            </h3>

            <p className="text-gray-600">
              We are committed to helping customers throughout their rental.
            </p>
          </div>

        </div>

      </div>


      {/* Final Section */}
      <div className="max-w-4xl mx-auto text-center mt-16">

        <h2 className="text-2xl md:text-3xl font-bold">
          YOUR JOURNEY, <span className="text-[#025CA3]">OUR BIKES</span>
        </h2>

        <p className="text-gray-600 leading-relaxed mt-4">
          Whether you are travelling around the city, going on a short
          adventure, or simply need a convenient way to get around,
          we are here to make your journey comfortable and memorable.
        </p>

      </div>

    </div>
  );
};

export default AboutUs;

