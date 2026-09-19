
import React from "react";

const LoginForm = () => {
  return (
    <div className="flex justify-center my-10 px-4">

      <form className="bg-gray-200 p-8 rounded-2xl shadow-lg w-full max-w-xl">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-[#025CA3] mb-8">
          LOGIN
        </h2>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-black mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#025CA3]"
          />
        </div>

        {/* Password */}
        <div className="mb-8">
          <label className="block text-black mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#025CA3]"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-[#025CA3] text-white py-3 rounded-md text-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

      </form>
    </div>
  );
};

export default LoginForm;

