import foodimg1 from "../../../assets/foodimg1.jpg";
import LoginModal from "@/pages/LoginModal";
import { useState } from "react";

const Herosecn = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="w-full h-[600px] relative">
      {/* Background Image */}
      <img className="w-full h-full object-cover" src={foodimg1} alt="food" />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 z-10">
        {/* Logo */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
          <h2 className="text-white font-bold text-lg sm:text-xl">zomato</h2>
        </div>

        {/* Login Button */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
          <button
            className="px-4 sm:px-6 py-1 border border-white text-white rounded-full"
            onClick={() => setIsLoginOpen(true)}
          >
            Login
          </button>
        </div>

        {/* Login Modal */}
        <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

        {/* Main Heading */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Partner with Zomato</h1>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-8">and grow your business</h1>
          <p className="text-sm sm:text-lg text-gray-200 mb-8">
            <span className="font-medium">0% commission for 1st month!</span> Valid for new restaurant partners in select cities
          </p>
          <button className="bg-blue-500 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-md">
            Register your restaurant
          </button>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="absolute left-1/2 bottom-[-100px] transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 sm:p-6 w-11/12 sm:max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          {/* Left Section */}
          <div className="sm:col-span-8">
            <h2 className="text-lg sm:text-2xl font-medium mb-2">Get Started - It only takes 10 minutes</h2>
            <p className="text-gray-500 text-sm sm:text-base mb-4">Please keep these documents and details ready for a smooth sign-up</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3 sm:space-y-4">
                {[
                  "PAN card",
                  "FSSAI license",
                  "Bank account details"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "GST number, if applicable",
                  "Menu & profile food image"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Video */}
          <div className="sm:col-span-4 hidden sm:flex items-center justify-center">
            <div className="bg-[#256FF0] rounded-lg w-full h-32 sm:h-full flex items-center justify-center">
              <video className="w-full h-full rounded-lg" autoPlay muted loop playsInline>
                <source src="https://b.zmtcdn.com/data/file_assets/5835a67ef0191da3b505988b3ff9a0141720502359.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosecn;
