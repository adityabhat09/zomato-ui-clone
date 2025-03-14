import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RestaurantSuccessStories = () => {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Arshad Khan",
      position: "Owner - Khushboo biryani, Shillong",
      testimonial: "Zomato enabled me to restart my operations post-COVID when I had no hope of doing my business again. I'm grateful to the platform for helping me thrive - my online ordering business has done so well, it has even taken over my dining business!",
      image: "https://b.zmtcdn.com/data/o2_assets/f596e23083bcaf7790bd06fa5bdef6641716462699.png" // Replace with actual image path
    },
    {
      id: 2,
      name: "Vijay",
      position: "Owner - Bingo, Coimbatore",
      testimonial: "Thanks to Zomato's invaluable support, our startup cloud kitchen has been doing wonders in the competitive food industry landscape. Their dedication to promoting local businesses and powerful reporting tools have been instrumental in our success, and we look forward to a long-term partnership.",
      image: "https://b.zmtcdn.com/data/o2_assets/f4bbbb9e0496d7772f44d2c0129cb0fb1716462984.png" // Replace with actual image path
    },
    {
      id: 3,
      name: "Sandeep K Mohan",
      position: "Owner - Mysore Raman Idli, Kerala",
      testimonial: "Zomato helped us grow by 60% since registration, and now, we are one of the biggest vegetarian joints in Ernakulam city.",
      image: "https://b.zmtcdn.com/data/o2_assets/ef35a4c36a01ebc1ab78e784986ac4af1716462944.png" // Replace with actual image path
    },
    {
    id: 4,
      name: "Aditya S Bhat",
      position: "Owner - Kerela Cafe, Vasai",
      testimonial: "Zomato helped us grow by 60% since registration, and now, we are one of the biggest vegetarian joints in Ernakulam city.",
      image: "https://b.zmtcdn.com/data/o2_assets/f596e23083bcaf7790bd06fa5bdef6641716462699.png" // Replace with actual image path
    }

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate visible testimonials (3 at a time for desktop, 1 for mobile)
  const getVisibleTestimonials = () => {
    return testimonials.slice(currentIndex, currentIndex + 3);
  };

  const handlePrev = () => {
    setCurrentIndex(current => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setCurrentIndex(current => Math.min(testimonials.length - 3, current + 1));
  };

  return (
    <div className="py-16 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Restaurant success stories
        </h2>
        
        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-6 rounded-lg shadow-md flex flex-col"
              >
                <div className="flex-grow mb-4">
                  <p className="text-gray-700">{testimonial.testimonial}</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/50"; // Fallback image
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button 
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 md:-translate-x-16 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button 
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 md:translate-x-16 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center ${currentIndex >= testimonials.length - 3 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - 3}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSuccessStories;