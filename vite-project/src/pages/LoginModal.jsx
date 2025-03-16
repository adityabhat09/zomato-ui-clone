import React from "react";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if isOpen is false

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>


      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        
        {/* Phone Number Input */}
        <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
          <span className="mr-2">🇮🇳 +91</span>
          <input type="text" className="w-full focus:outline-none" placeholder="Phone" />
        </div>

        {/* OTP Button */}
        <button className="bg-red-500 text-white w-full py-2 mt-4 rounded-lg">
          Send One Time Password
        </button>

        <div className="text-center my-2 text-gray-500">OR</div>

        {/* Email & Google Login Buttons */}
        <button className="flex items-center justify-center w-full border py-2 rounded-lg">
          📧 Continue with Email
        </button>
        <button className="flex items-center justify-center w-full border py-2 mt-2 rounded-lg">
          🔵 Sign in with Google
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
