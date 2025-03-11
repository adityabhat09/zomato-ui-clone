import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Import ChevronDown icon from lucide-react

const ExploreOptions = () => {
  const exploreLinksData = [
    {
      text: "Popular cuisines near me",
      isDropdown: true,
      dropdownItems: [
        "Beverages near me", "Biryani near me", "Burger near me", "Chinese near me", "Coffee near me", "Desserts near me", "Ice Cream near me",
        "Kebab near me", "Maharashtrian near me", "Momos near me", "Mughlai near me", "North Indian near me",
        "Pizza near me", "Rolls near me", "Sandwich near me", "Seafood near me", "Shake near me", "Sichuan near me", "South Indian near me",
        "Street near me"
      ],
    },
    {
      text: "Popular restaurant types near me",
      isDropdown: true,
      dropdownItems: [
        "Casual Dining Restaurants Near Me", "Bakeries Near Me", "Bars Near Me", "Beverage Shops Near Me", "Bhojanalya Near Me",
        "Cafe Near Me", "Cloud Kitchens Near Me", "Clubs Near Me", "Coffee Shops Near Me", "Dessert Parlors Near Me", "Dhabas Near Me",
        "Fine Dining Restaurants Near Me", "Food Courts Near Me", "Food Trucks Near Me", "Irani Cafes Near Me", "Kiosks Near Me", "Lounges Near Me",
        "Meat Shops Near Me", "Paan Shop Near Me", "Pubs Near Me", "Quick Bites Near Me", "Sweet Shops Near Me"
      ],
    },
    {
      text: "Top restaurant chains.",
      isDropdown: true,
      dropdownItems: [
        "Burger King Near Me", "Domino's Near Me", "KFC Near Me", "McDonald's Near Me", "Pizza Hut Near Me", "Subway Near Me", "Wow! Momo Near Me"
      ],
    },
    {
      text: "Cities we deliver to",
      isDropdown: true,
      dropdownItems: [
        "Ahmedabad", "Bangalore", "Chennai", "Delhi NCR", "Hyderabad", "Kolkata", "Mumbai", "Pune"
      ],
    }
  ];

  // State to manage dropdown visibility for each dropdown
  const [dropdownStates, setDropdownStates] = useState({});

  const toggleDropdown = (dropdownText) => {
    setDropdownStates(prevState => ({
      ...prevState,
      [dropdownText]: !prevState[dropdownText] // Toggle the state for the clicked dropdown
    }));
  };

  return (
    <div className="py-8 bg-gray-50"> {/* Main container has off-white background */}
      <div>
        {/* Separated "Explore options near me" as a heading */}
        <div className="mb-4">
          <span className="text-lg font-semibold text-gray-800">Explore options near me</span>
        </div>

        {exploreLinksData.map((linkItem, index) => (
          <div key={index} className="mb-2"> {/* Added mb-2 for spacing between dropdown cards */}
            {/* Dropdown Card Container */}
            <div className="bg-white rounded-md border border-gray-200 p-4"> {/* Card styling: white bg, border, padding */}
              {linkItem.isDropdown ? (
                <div
                  onClick={() => toggleDropdown(linkItem.text)}
                  className="cursor-pointer py-2 text-gray-700 hover:text-red-500 transition-colors duration-200 flex justify-between items-center" // Flexbox for alignment
                >
                  <span>{linkItem.text}</span> {/* Wrap text in span for flexbox alignment */}
                  <ChevronDown className="h-4 w-4 text-gray-500" /> {/* Dropdown Icon */}
                </div>
              ) : (
                <a
                  href="#"
                  className="block py-2 text-gray-700 hover:text-red-500 transition-colors duration-200"
                >
                  {linkItem.text}
                </a>
              )}

              {/* Dropdown List (Conditionally Rendered) */}
              {linkItem.isDropdown && dropdownStates[linkItem.text] && (
                <div className="ml-4 mt-2">
                  {linkItem.dropdownItems.map((dropdownItem, ddIndex) => (
                    <a
                      key={ddIndex}
                      href="#"
                      className="block py-1 text-sm text-gray-600 hover:text-red-500 transition-colors duration-200"
                    >
                      {dropdownItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreOptions;