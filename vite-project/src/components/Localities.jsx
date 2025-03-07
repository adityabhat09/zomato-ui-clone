import React from 'react';
import { ArrowRight } from 'lucide-react'

const Localities = () => {
  const localityData = [
    { name: 'Lower Parel', places: '505 places' },
    { name: 'Powai', places: '441 places' },
    { name: 'Malad West', places: '973 places' },
    { name: 'Borivali West', places: '698 places' },
    { name: 'Bandra Kurla Complex', places: '165 places' },
    { name: 'Vashi', places: '669 places' },
    { name: 'Fort', places: '296 places' },
    { name: 'Juhu', places: '254 places' },
  ];

  return (
    <div className="py-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Popular localities in and around Mumbai
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {localityData.map((locality, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200 flex justify-between items-center"
          >
            <div>
              <h3 className="text-sm font-semibold text-gray-700">{locality.name}</h3>
              <p className="text-xs text-gray-500">{locality.places}</p>
            </div>
            <span className="text-gray-400">&#8250;</span> {/* Right arrow icon */}
          </div>
        ))}
        {/* "See more" Card */}
        <div className="bg-white p-4 rounded-md shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200 flex justify-center items-center">
          <span className="text-sm font-semibold text-black">See more</span>
        </div>
      </div>
    </div>
  );
};

export default Localities;