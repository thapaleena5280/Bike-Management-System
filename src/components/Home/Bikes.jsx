
import React from "react";
import { Honda, Yamaha, Duke, B } from "../Images";

const Bikes = () => {
  return (
    <div className="wrapper py-12">

      {/* Heading */}
      <div className="text-center mb-10">

        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-1 bg-gray-400 rounded"></div>

          <h2 className="text-gray-500 font-semibold tracking-widest">
            OUR BIKES
          </h2>

          <div className="w-10 h-1 bg-gray-400 rounded"></div>
        </div>

        <h1 className="text-4xl font-bold mt-3">
          GET YOUR{" "}
          <span className="text-[#025CA3]">
            BIKE FOR RENT
          </span>
        </h1>

        <p className="text-gray-500 mt-3">
          Choose your favorite bike and enjoy your ride.
        </p>

      </div>


      {/* Bike Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">

        {/* Honda */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

          <div className="bg-gray-100 p-5">
            <img
              src={Honda}
              alt="Honda Bike"
              className="w-full h-40 object-contain"
            />
          </div>

          <div className="p-5 text-center">
            <h2 className="text-xl font-bold">
              Honda{" "}
              <span className="text-[#025CA3]">
                Bike
              </span>
            </h2>

            <p className="text-gray-500 mt-2">
              Comfortable and reliable
            </p>

            <p className="font-semibold mt-2">
              Rs. 1500 / day
            </p>

            <button className="w-full mt-4 bg-[#025CA3] text-white py-2 rounded-lg hover:bg-blue-700">
              Hire Now
            </button>
          </div>

        </div>


        {/* Yamaha */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

          <div className="bg-gray-100 p-5">
            <img
              src={Yamaha}
              alt="Yamaha Bike"
              className="w-full h-40 object-contain"
            />
          </div>

          <div className="p-5 text-center">
            <h2 className="text-xl font-bold">
              Yamaha{" "}
              <span className="text-[#025CA3]">
                Bike
              </span>
            </h2>

            <p className="text-gray-500 mt-2">
              Stylish and powerful
            </p>

            <p className="font-semibold mt-2">
              Rs. 1800 / day
            </p>

            <button className="w-full mt-4 bg-[#025CA3] text-white py-2 rounded-lg hover:bg-blue-700">
              Hire Now
            </button>
          </div>

        </div>


        {/* Duke */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

          <div className="bg-gray-100 p-5">
            <img
              src={Duke}
              alt="Duke Bike"
              className="w-full h-40 object-contain"
            />
          </div>

          <div className="p-5 text-center">
            <h2 className="text-xl font-bold">
              KTM{" "}
              <span className="text-[#025CA3]">
                Duke
              </span>
            </h2>

            <p className="text-gray-500 mt-2">
              Sporty and powerful
            </p>

            <p className="font-semibold mt-2">
              Rs. 2000 / day
            </p>

            <button className="w-full mt-4 bg-[#025CA3] text-white py-2 rounded-lg hover:bg-blue-700">
              Hire Now
            </button>
          </div>

        </div>


        {/* Bike 4 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

          <div className="bg-gray-100 p-5">
            <img
              src={B}
              alt="Bike"
              className="w-full h-40 object-contain"
            />
          </div>

          <div className="p-5 text-center">
            <h2 className="text-xl font-bold">
              Bullet{" "}
              <span className="text-[#025CA3]">
                Bike
              </span>
            </h2>

            <p className="text-gray-500 mt-2">
              Smooth and comfortable
            </p>

            <p className="font-semibold mt-2">
              Rs. 1700 / day
            </p>

            <button className="w-full mt-4 bg-[#025CA3] text-white py-2 rounded-lg hover:bg-blue-700">
              Hire Now
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Bikes;

