import React from 'react'
// import foodimg1 from '../assets/foodimg1.jpg';
import PhoneImg from '../assets/PhoneImg.avif'
import Appstore from '../assets/Appstore.webp'
import Playstore from '../assets/Playstore.webp'
// 
const GetZomato = () => {
  return (
    
    <div className="bg-gray-50 py-16">  {/* for orange bg color and padding */}
      <div className="container mx-auto px-4 flex items-center justify-center">

        {/* phone image wala div */}
        <div className="relative w-1/2 hidden md:block mr-12 ">
          <img src={PhoneImg} alt="Phone Image" ></img>
        </div>


        {/* text wala part on the right */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Get the Zomato app</h2>

          <p className="text-gray-700 mb-6">We will send you a link, open it on your phone to download the app</p>

          {/*email , phone radio buttons  */}
          <div className="mb-4">
            <label className="inline-flex items-center mr-6">
              <input type="radio" className="form-radio h-5 w-5 text-red-600" name="appMethod " value="email" defaultChecked ></input>
              <span className="ml-2 text-gray-700 ">Email</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio h-5 w-5 text-red-600" name="appMethod" value="phone" />
              <span className="ml-2 text-gray-700">Phone</span>
            </label>
          </div>

          {/* input and button */}
          <div className="flex">
            <input type="email" placeholder="Email" className="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md mr-2" />

            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:shadow-outline" type='button'>
              Share App Link
            </button>
          </div>

          {/* playstore button wala section */}
          <div>
            <p className="text-gray-700 font-semibold mb-2">Download app from</p>
            <div className="flex gap-4">
              <img src={Playstore} alt="google play button" className="h-12" />
              <img src = {Appstore} alt="appstore button" className="h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetZomato