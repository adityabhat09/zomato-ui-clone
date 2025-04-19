import React from "react";
import { useState } from "react";
import Hero from "@/components/Hero";
import ZomatoCards from "@/components/ZomatoCards";
import Collections from "@/components/Collections";
import Localities from "@/components/Localities";
import GetZomato from "@/components/GetZomato";
import ExploreOptn from "@/components/ExploreOptn";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import Footer from "@/components/Footer";

import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';


const LandingPage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Control modal visibility
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Control mobile menu visibility
  
  // Define the toggleMenu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="relative overflow-x-hidden w-full">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex flex-wrap justify-between items-center px-4 sm:px-6 md:px-8 py-4 sm:py-5 text-white bg-transparent z-10">
        <div className="text-base sm:text-lg font-semibold">
          <a href="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN" className="hover:underline">Get the app</a>
        </div>
        
        {/* Mobile menu button */}
        <div className="block md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex gap-4 lg:gap-6 text-base lg:text-lg">
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
          <a 
            href="#" 
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault(); // Prevents page refresh
              setIsSignUpOpen(true);
            }}
          >
            Sign Up
          </a>
        </div>
      </nav>


      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-14 sm:top-16 left-0 right-0 w-full md:hidden z-20 bg-black bg-opacity-80 py-4">
          <div className="flex flex-col items-center gap-4">
            <Link 
              to="/AddRest" 
              className="text-white hover:underline text-base sm:text-lg"
              onClick={toggleMenu}
            >
              Add Restaurants
            </Link>
            <a 
              href="#" 
              className="text-white hover:underline text-base sm:text-lg"
              onClick={(e) => {
                e.preventDefault();
                setIsLoginOpen(true);
                toggleMenu();
              }}
            >
              Login
            </a>
            <a 
              href="#" 
              className="text-white hover:underline text-base sm:text-lg"
              onClick={(e) => {
                e.preventDefault();
                setIsSignUpOpen(true);
                toggleMenu();
              }}
            >
              Sign Up
            </a>
          </div>
        </div>
      )}

      {/* login modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {/* SignUp Modal */}
      <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />


      {/* hero section */}
      <Hero />


      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mx-auto">
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
      <div className="bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mx-auto">
          <ExploreOptn/>
        </div>
      </div>
      
      {/* footer */}
      {/* <Footer/> */}


    </div>
  )
}
export default LandingPage;