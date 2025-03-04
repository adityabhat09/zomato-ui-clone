import React from "react";
import Hero from "@/components/Hero";
import ZomatoCards from "@/components/ZomatoCards";

const LandingPage = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-5 text-white bg-transparent">
        <div className="text-lg font-semibold">Get the App</div>
        <div className="flex gap-6 text-lg">
          <a href="#" className="hover:underline">Add Restaurants</a>
          <a href="#" className="hover:underline">Login</a>
          <a href="#" className="hover:underline">Signup</a>
        </div>
      </nav>


      {/* hero section */}
      <Hero />

      {/* zomato cards section */}
      <ZomatoCards/>

    </div>
  )
}

export default LandingPage