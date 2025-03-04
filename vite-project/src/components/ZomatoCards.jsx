import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import cardimg1 from "../assets/cardimg1.jpg";
import cardimg2 from "../assets/cardimg2.jpg";
import cardimg3 from "../assets/cardimg3.jpg";

const ZomatoCards = () => {
  const cardData = [
    {
      id: 1,
      title: "Order Online",
      description: "Stay home and order to your doorstep",
      image: cardimg1,
      alt: "A plate of curry and rice",
    },
    {
      id: 2,
      title: "Dining",
      description: "View the city's favourite dining venues",
      image: cardimg2,
      alt: "Elegant restaurant dining setup",
    },
    {
      id: 3,
      title: "Live Events",
      description: "Discover India's best events & concerts",
      image: cardimg3,
      alt: "Person at a concert with arms spread wide",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <Card 
            key={card.id} 
            className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer p-0"
          >
            {/* Image Container */}
            <div className="h-48 w-full">
              <img
                src={card.image}
                alt={card.alt}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Text Content with Reduced Padding */}
            <CardContent className="px-3 py-2">
              <h2 className="text-lg font-semibold text-gray-800">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ZomatoCards;
