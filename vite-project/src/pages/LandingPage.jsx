import React from "react";
import { useState } from "react";
import Hero from "@/components/Hero";
import ZomatoCards from "@/components/ZomatoCards";
import Collections from "@/components/Collections";
import Localities from "@/components/Localities";
import GetZomato from "@/components/GetZomato";
import ExploreOptn from "@/components/ExploreOptn";
import LoginModal from "./LoginModal";
import Footer from "@/components/Footer";

import { Link } from "react-router-dom";

const LandingPage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Control modal visibility
  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-5 text-white bg-transparent z-10">
        <div className="text-lg font-semibold">Get the App</div>
        <div className="flex gap-6 text-lg">
          <Link to="/AddRest" className="hover:underline">Add Restaurants</Link>
          <a 
            href="#" 
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault(); // Prevents page refresh
              setIsLoginOpen(true);
            }}
          >
            Login
          </a>
        {/* Set isLoginOpen to true on click */}
          <a href="#" className="hover:underline">Signup</a>
        </div>
      </nav>

      {/* login modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />


      {/* hero section */}
      <Hero />


      <div className="container mx-auto px-40">
        {/* zomato cards section */}
        <ZomatoCards/>

        {/* collections section */}
        <Collections/>

        {/* localities section */}
        <Localities/>
      </div>

      {/* get the zomato app section */}
      <GetZomato/>

      {/* Explore options near me section */}
      <div  className="bg-gray-50">
        <div className="container mx-auto px-40">
          <ExploreOptn/>
        </div>
      </div>
      
      {/* footer */}
      {/* <Footer/> */}


    </div>
  )
}

export default LandingPage