import React from 'react';
import { Users, PackageCheck, Mail } from 'lucide-react';

const WhyPartnerWithZomato = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-12 border-b border-t py-4">
          Why should you partner with Zomato?
        </h2>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center text-center">
            <Users className="text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-medium mb-2">Attract new customers</h3>
            <p className="text-gray-600">
              Reach the millions of people ordering on Zomato
            </p>
          </div>
          
          {/* Benefit 2 */}
          <div className="flex flex-col items-center text-center">
            <PackageCheck className="text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-medium mb-2">Doorstep delivery convenience</h3>
            <p className="text-gray-600">
              Easily get your orders delivered through our trained delivery partners
            </p>
          </div>
          
          {/* Benefit 3 */}
          <div className="flex flex-col items-center text-center">
            <Mail className="text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-medium mb-2">Onboarding support</h3>
            <p className="text-gray-600">
              For any support, email us at <br />
              <a href="mailto:merchantonboarding@zomato.com" className="text-blue-500">
                merchantonboarding@zomato.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPartnerWithZomato;