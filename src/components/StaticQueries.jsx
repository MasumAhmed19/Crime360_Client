import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdSmartphone } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const iconMap = {
  "Technology": <MdSmartphone className="text-[#7201FF]" />,
  "Home Appliance": <IoHome className="text-[#7201FF]" />,
  "Personal Care": <FaHeart className="text-[#7201FF]" />
};

const StaticQueries = () => {
  const [activeTab, setActiveTab] = useState('tabs-with-card-1');
  const [categories, setCategories] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios(`${import.meta.env.VITE_API_URL}/query-count`);
        const data = response.data;
  
        const mappedCategories = data.map(item => ({
          id: `tabs-with-card-${item.cateName.toLowerCase().replace(" ", "-")}`,
          title: item.cateName.toUpperCase(),
          icon: iconMap[item.cateName] || <MdSmartphone className="text-[#7201FF]" />,
          description: getDescriptionByCategory(item.cateName),
          img: getImageByCategory(item.cateName),
          count: item.count
        }));
  
        setCategories(mappedCategories);
  
        // Set the first category as active tab
        if (mappedCategories.length > 0) {
          setActiveTab(mappedCategories[0].id);
        }
  
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
  
    fetchCategories();
  }, []);
  

  // Function to get image URL based on category
  const getImageByCategory = (category) => {
    switch (category) {
      case "Technology":
        return "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=130&w=2020";
      case "Home Appliance":
        return "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=130&w=2020";
      case "Personal Care":
        return "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=130&w=2020";
      default:
        return "https://via.placeholder.com/400"; // Default image if no match
    }
  };

  // Function to get description based on category
  const getDescriptionByCategory = (category) => {
    switch (category) {
      case "Technology":
        return "Latest gadgets, smartphones, and tech innovations";
      case "Home Appliance":
        return "Smart home devices and household appliances";
      case "Personal Care":
        return "Beauty, health, and wellness products";
      default:
        return "Explore the latest in this category";
    }
  };

  return (
    <div className="">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16">
          <div className="py-12 space-y-5 flex flex-col items-center">
              <h2 className="heading1 text-gray-800 text-center ">
               Suggestify Categories
                </h2>
                <p className="text-base text-gray-500 text-center md:w-2/3 mx-auto">Explore a wide selection of carefully curated product categories tailored to meet your needs. Whether you're looking for the latest tech gadgets, home appliances, or personal care products</p>
                <div>

                <Link
                      to='/queries'
                      className='btn1 w-full'
                  >
                      Queries
                  </Link>
                </div>

          </div>
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">

            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              
              <nav className="grid gap-4 mt-5 md:mt-10" role="tablist" aria-orientation="vertical">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    className={`text-start hover:bg-[#EEE8FE] focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl ${activeTab === category.id ? 'bg-white shadow-md' : ''}`}
                    onClick={() => setActiveTab(category.id)}
                    aria-selected={activeTab === category.id}
                    role="tab"
                  >
                    <span className="flex flex-col items-start gap-x-6">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-md bg-[#EEE8FE]">
                          {category.icon}
                        </div>
                          <span className="block text-lg font-semibold text-gray-800">{category.title}</span>
                      </div>
                      <span className="grow">
                        <span className="block mt-1 text-base text-gray-800">{category.description}</span>
                        <div>
                          <span className="block mt-1 bg-[#EEE8FE] text-[#7201FF] rounded-sm text-xs px-1 w-fit">Total Query: {category.count}</span>
                        </div>
                      </span>
                    </span>
                  </button>
                ))}
              </nav>
            </div>
            <div className="lg:col-span-6">
              <div className="relative">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    id={category.id}
                    className={`${activeTab === category.id ? 'block' : 'hidden'}`}
                    role="tabpanel"
                  >
                    <img className="shadow-xl rounded-md h-[60vh] object-cover" src={category.img} alt={category.title} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticQueries;
