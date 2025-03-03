import { MapPin, ChevronDown, Search } from 'lucide-react';
import React, { useState } from "react";
import foodimg1 from '../assets/foodimg1.jpg';

const Hero = () => {
  const [selectedLocation, setSelectedLocation] = useState("Mumbai");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const locations = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];

  return (
    <div className="w-full h-[627px] relative">
      <img className="w-full h-full object-cover" src={foodimg1} alt="food" />

      {/* Overlay content */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        {/* Zomato Title */}
        <h1 className="text-6xl font-bold tracking-wide">Zomato</h1>

        {/* Tagline */}
        <p className="text-2xl mt-2">Discover the best food & drinks in {selectedLocation}</p>

        {/* Search Box */}
        <div className="mt-6 flex items-center bg-white p-3 rounded-lg shadow-lg w-[600px] mx-auto">
          
          {/* Location Selector */}
          <div 
            className="flex items-center gap-2 px-3 border-r border-gray-300 cursor-pointer relative"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            tabIndex={0}  
            onBlur={() => setTimeout(() => setDropdownOpen(false), 100)}  
          >
            <MapPin className="text-red-500 w-5 h-5" />
            <span className="text-gray-700 font-semibold">{selectedLocation}</span>
            <ChevronDown className="text-gray-500 w-5 h-5" />

            {/* Dropdown list */}
            {dropdownOpen && (
              <ul className="absolute left-0 top-10 bg-white shadow-lg rounded-md w-full text-left overflow-hidden z-10">
                {locations.map((loc) => (
                  <li
                    key={loc}
                    className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setSelectedLocation(loc);
                      setDropdownOpen(false); // Close dropdown after selection
                    }}
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Bar */}
          <div className="flex items-center flex-1 px-3">
            <Search className="text-gray-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for restaurant, cuisine, or a dish" 
              className="w-full p-2 outline-none text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
