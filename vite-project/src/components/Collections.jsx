import React from 'react';
import collection1 from '../assets/collection1.jpg';
import collection2 from '../assets/collection2.jpg';  
import collection3 from '../assets/collection3.jpg';
import collection4 from '../assets/collection4.jpg';

const Collections = () => {
  const cardData = [
    { title: 'Top Trending Spots', places: '37 Places', imageSrc: collection1 }, // Replace with actual image URLs
    { title: 'Best Insta-worthy Places', places: '25 Places', imageSrc: collection2 },
    { title: 'Newly Opened Places', places: '44 Places', imageSrc: collection3 },
    { title: 'Iftar Specials', places: '15 Places', imageSrc: collection4 },
  ];

  return (
    <div className="container  mx-auto px-4 py-8">
      {/* title */}
      <div className="font-semibold text-2xl">
        <h2>Collections</h2>
      </div>

      {/* desc */}
      <div className="flex justify-between">
        <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends</p>

        <a href="#" className="text-blue-500 text-sm">
          All collections in Mumbai &#8594; {/* Right arrow character */}
        </a>
      </div>

      {/* cards ka container */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Image Placeholder (replace with actual image) */}
            <div className="aspect-w-4 aspect-h-3"> {/* You might need to install aspect-ratio plugin if not already configured - see note below */}
              <img
                className="w-full h-full object-cover"
                src={card.imageSrc} // CORRECTED: Using card.imageSrc here!
                alt={card.title}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{card.places}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Collections;