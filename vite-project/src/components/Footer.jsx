import { Linkedin, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import React from "react";
import Appstore from '../assets/Appstore.webp';
import Playstore from '../assets/Playstore.webp';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section: Zomato Title + Country & Language Select */}
        <div className="flex justify-between items-center mb-6">
          {/* Zomato Title */}
          <div className="text-3xl font-bold text-black">zomato</div>

          {/* Country & Language Select */}
          <div className="flex space-x-4">
            <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-200">
              🌍 India
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-200">
              🇬🇧 English
            </button>
          </div>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* About Zomato */}
          <div>
            <h3 className="font-semibold mb-2">ABOUT ZOMATO</h3>
            <ul className="space-y-1">
              <li>Who We Are</li>
              <li>Blog</li>
              <li>Work With Us</li>
              <li>Investor Relations</li>
              <li>Report Fraud</li>
              <li>Press Kit</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Zomaverse */}
          <div>
            <h3 className="font-semibold mb-2">ZOMAVERSE</h3>
            <ul className="space-y-1">
              <li>Zomato</li>
              <li>Blinkit</li>
              <li>District</li>
              <li>Feeding India</li>
              <li>Hyperpure</li>
              <li>Zomato Live</li>
              <li>Zomaland</li>
              <li>Weather Union</li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="font-semibold mb-2">LEARN MORE</h3>
            <ul className="space-y-1">
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="font-semibold mb-2">SOCIAL LINKS</h3>
            <div className="flex space-x-4 text-gray-600 mb-4">
              <Linkedin className="w-6 h-6 hover:text-blue-600 cursor-pointer" />
              <Instagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
              <Twitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              <Facebook className="w-6 h-6 hover:text-blue-700 cursor-pointer" />
              <Youtube className="w-6 h-6 hover:text-red-600 cursor-pointer" />
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col space-y-4">
              <img
                src={Playstore}
                alt="App Store"
                className="w-40"
                
              />
              <img
                src={Appstore}
                alt="Google Play"
                className="w-40"
                
              />
            </div>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="text-xs text-center mt-6 text-gray-500">
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies.  
          2008-2025 © Zomato™ Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
