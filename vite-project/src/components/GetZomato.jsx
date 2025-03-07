import React from 'react';
// import foodimg1 from '../assets/foodimg1.jpg';
import PhoneImg from '../assets/PhoneImg.avif';
import Appstore from '../assets/Appstore.webp';
import Playstore from '../assets/Playstore.webp';

const GetZomato = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 flex items-center justify-center">
        {/* phone image wala div */}
        <div className="relative w-1/3 hidden md:block mr-12">
          <img src={PhoneImg} alt="Phone Image" className="w-full max-w-lg mx-auto"></img>
        </div>

        {/* text wala part on the right */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get the Zomato app</h2>

          <p className="text-lg text-gray-700 mb-6">We will send you a link, open it on your phone to download the app</p>

          {/*email , phone radio buttons  */}
          <div className="mb-4">
            <label className="inline-flex items-center mr-6">
              <input type="radio" className="form-radio h-5 w-5 text-red-500" name="appMethod" value="email" defaultChecked></input>
              <span className="ml-2 text-lg text-gray-700">Email</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio h-5 w-5 text-red-500" name="appMethod" value="phone" />
              <span className="ml-2 text-lg text-gray-700">Phone</span>
            </label>
          </div>

          {/* input and button */}
          <div className="flex">
            <input type="email" placeholder="Email" className="px-4 py-3 shadow-sm border border-gray-300 focus:ring-red-500 focus:border-red-500 block w-full text-lg rounded-md mr-4" />

            <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-md focus:outline-none focus:shadow-outline text-lg whitespace-nowrap">
              Share App Link
            </button>
          </div>

          {/* playstore button wala section */}
          <div className="mt-8">
            <p className="text-lg text-gray-600 mb-4">Download app from</p>
            <div className="flex gap-4">
              <a href="#" className="inline-block">
                <img src={Playstore} alt="Google Play" className="h-12" />
              </a>
              <a href="#" className="inline-block">
                <img src={Appstore} alt="App Store" className="h-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetZomato;