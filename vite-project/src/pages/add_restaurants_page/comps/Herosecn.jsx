import foodimg1 from "../../../assets/foodimg1.jpg";

const Herosecn = () => {
  return (
    <div className="w-full h-[600px] relative">
      {/* Background Image */}
      <img className="w-full h-full object-cover" src={foodimg1} alt="food" />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 ">
        {/* Logo */}
        <div className="absolute top-6 left-6">
          <h2 className="text-white font-bold text-xl">zomato</h2>
        </div>
        
        {/* Login Button */}
        <div className="absolute top-6 right-6">
          <button className="px-6 py-1 border border-white text-white rounded-full">Login</button>
        </div>
        
        {/* Main Heading */}
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Partner with Zomato</h1>
          <h1 className="text-5xl font-bold text-white mb-8">and grow your business</h1>
          
          {/* Commission Text */}
          <p className="text-lg text-gray-200 mb-8">
            <span className="font-medium">0% commission for 1st month!</span> Valid for new restaurant partners in select cities
          </p>
          
          {/* Register Button */}
          <button className="bg-blue-500 text-white font-medium py-3 px-6 rounded-md">
            Register your restaurant
          </button>
        </div>
      </div>
      
      {/* Bottom Card */}
      <div className="absolute -bottom-30 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <div className="grid grid-cols-12 gap-4">
          {/* Left Section */}
          <div className="col-span-8">
            <h2 className="text-2xl font-medium mb-2">Get Started - It only takes 10 minutes</h2>
            <p className="text-gray-500 mb-4">Please keep these documents and details ready for a smooth sign-up</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>PAN card</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <span>FSSAI license</span>
                    <div className="text-xs text-gray-500">
                      Don't have a FSSAI license? <a href="#" className="text-blue-500">Apply here</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Bank account details</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>GST number, if applicable</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <span>Menu & profile food image</span>
                    <div className="text-xs text-gray-500">
                      What is profile food image? <a href="#" className="text-blue-500">Refer here</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Section - Phone Image */}
          {/* <div className="col-span-4">
            <div className="bg-blue-500 rounded-lg p-4 h-full flex flex-col items-center justify-center text-white">
              <div className="text-sm mb-2">zomato</div>
              <div className="w-16 h-24 border-2 border-white rounded-xl mb-2"></div>
              <p className="text-sm font-medium">Send & accept contract</p>
            </div>
          </div> */}

          {/* Right Section - Video */}
          <div className="col-span-4">
            <div className="bg-[#256FF0] rounded-lg h-full flex items-center justify-center">
              <video 
                className="w-full h-full  rounded-lg" 
                autoPlay 
                muted 
                loop 
                playsInline
              >
                {/* You can use either online URL or local path */}
                <source src="https://b.zmtcdn.com/data/file_assets/5835a67ef0191da3b505988b3ff9a0141720502359.mp4" type="video/mp4" />
                {/* Or use imported video like: */}
                {/* <source src={importedVideoVariable} type="video/mp4" /> */}
              </video>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Herosecn;