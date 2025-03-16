import React from "react";
import { Mail } from "lucide-react"; // Using Mail icon from lucide-react
import { FaGoogle } from "react-icons/fa"; // Using Google icon from react-icons

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        
        {/* Phone Number Input */}
        <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
          <div className="flex items-center mr-2">
            <span className="text-lg">🇮🇳</span>
            <span className="ml-1">+91</span>
            <span className="mx-2 border-r h-6"></span>
          </div>
          <input
            type="text"
            className="w-full focus:outline-none pl-2"
            placeholder="Phone"
          />
        </div>

        {/* OTP Button */}
        <button className="bg-red-500 text-white w-full py-2 mt-4 rounded-lg">
          Send One Time Password
        </button>

        <div className="text-center my-2 text-gray-500">OR</div>

        {/* Email & Google Login Buttons */}
        <button className="flex items-center justify-center w-full border py-2 rounded-lg">
          <Mail className="h-4 w-4 mr-2" /> Continue with Email
        </button>
        <button className="flex items-center justify-center w-full border py-2 mt-2 rounded-lg">
          <FaGoogle className="h-4 w-4 mr-2" /> Sign in with Google
        </button>

        {/* Signup Link */}
        <p className="text-center mt-4 text-sm">
          New to Zomato? <span className="text-red-500 cursor-pointer">Create account</span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
