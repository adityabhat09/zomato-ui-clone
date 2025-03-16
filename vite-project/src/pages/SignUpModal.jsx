import React from "react";
import { Mail } from "lucide-react"; // Using Mail icon from lucide-react
import { FaGoogle } from "react-icons/fa"; // Using Google icon from react-icons

const SignUpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      {/* Modal Container */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Close Button */}
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          ✖
        </button>

        {/* Heading */}
        <h2 className="text-xl font-semibold mb-4 text-center">Sign Up</h2>
        
        {/* Full Name Field */}
        <div className="border rounded-lg px-3 py-2 mt-1">
          <input
            type="text"
            className="w-full focus:outline-none"
            placeholder="Full Name"
          />
        </div>

        {/* Email Field */}
        <div className="border rounded-lg px-3 py-2 mt-4">
          <input
            type="email"
            className="w-full focus:outline-none"
            placeholder="Email"
          />
        </div>

        {/* Checkbox: Terms & Policies */}
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 text-red-500 focus:ring-0 cursor-pointer"
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            I agree to Zomato's <span className="underline cursor-pointer">Terms of Service</span>, 
            <span className="underline cursor-pointer"> Privacy Policy</span> and 
            <span className="underline cursor-pointer"> Content Policies</span>
          </label>
        </div>

        {/* Create Account Button */}
        <button className="bg-red-500 text-white w-full py-2 mt-4 rounded-lg">
          Create account
        </button>

        {/* OR Separator */}
        <div className="text-center my-2 text-gray-500">OR</div>

        {/* Email & Google Sign Up Buttons */}
        <button className="flex items-center justify-center w-full border py-2 rounded-lg">
          <Mail className="h-4 w-4 mr-2" /> Sign up with Email
        </button>
        <button className="flex items-center justify-center w-full border py-2 mt-2 rounded-lg">
          <FaGoogle className="h-4 w-4 mr-2" /> Sign up with Google
        </button>

        {/* Already have an account? Login */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <span className="text-red-500 cursor-pointer">Log in</span>
        </p>
      </div>
    </div>
  );
};

export default SignUpModal;
