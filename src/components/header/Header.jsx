
import React, { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="wrapper px-4">

        {/* Header */}
        <div className="flex items-center justify-between py-5">

          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-[#025CA3]">
            Bike Management System
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

            <Link to="/" className="font-semibold hover:text-[#025CA3]">
              Home
            </Link>

            <Link
              to="/service"
              className="font-semibold hover:text-[#025CA3]"
            >
              Our Services
            </Link>

            <Link
              to="/about"
              className="font-semibold hover:text-[#025CA3]"
            >
              About Us
            </Link>

            <Link
              to="/faqs"
              className="font-semibold hover:text-[#025CA3]"
            >
              FAQs
            </Link>

            <Link
              to="/login"
              className="px-4 py-2 border border-[#025CA3] text-[#025CA3] rounded-md font-semibold"
            >
              Login
            </Link>

            <Link
              to="/registration"
              className="px-4 py-2 bg-[#025CA3] text-white rounded-md font-semibold"
            >
              Signup
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pb-5">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="font-semibold"
            >
              Home
            </Link>

            <Link
              to="/service"
              onClick={() => setIsOpen(false)}
              className="font-semibold"
            >
              Our Services
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="font-semibold"
            >
              About Us
            </Link>

            <Link
              to="/faqs"
              onClick={() => setIsOpen(false)}
              className="font-semibold"
            >
              FAQs
            </Link>

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 border border-[#025CA3] text-[#025CA3] rounded-md"
            >
              Login
            </Link>

            <Link
              to="/registration"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 bg-[#025CA3] text-white rounded-md"
            >
              Signup
            </Link>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Header;
