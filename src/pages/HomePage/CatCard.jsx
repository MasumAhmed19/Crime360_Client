import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdSmartphone } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const iconMap = {
  Technology: <MdSmartphone className="text-[#7201FF]" />,
  "Home Appliance": <IoHome className="text-[#7201FF]" />,
  "Personal Care": <FaHeart className="text-[#7201FF]" />,
};

const CatCard = () => {
  const [categories, setCategories] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios(
          `${import.meta.env.VITE_API_URL}/query-count`
        );
        const data = response.data;

        const mappedCategories = data.map((item) => ({
          id: item.cateName.toLowerCase().replace(" ", "-"),
          title: item.cateName.toUpperCase(),
          icon: iconMap[item.cateName] || (
            <MdSmartphone className="text-[#7201FF]" />
          ),
          description: getDescriptionByCategory(item.cateName),
          img: getImageByCategory(item.cateName),
          count: item.count,
        }));

        setCategories(mappedCategories);
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
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-32 mx-auto">
      <div className="text-center mb-10 space-y-5">
        <h2 className="heading1 text-gray-800">
          Suggestify <span className="text-[#7201FF]">Categories</span>
        </h2>
        <p className="text-base text-gray-500 md:w-2/3 mx-auto">
          Explore a wide selection of carefully curated product categories
          tailored to meet your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="card g1 border-2 border-[#EBE5FD]  hover:border-[#7201FF] w-full duration-200"
          >
            <figure className="px-5 pt-10">
              <img
                src={category.img}
                alt={category.title}
                className="rounded-xl h-52 object-cover"
              />
            </figure>
            <div className="flex items-center justify-center py-5">
              <span className="block mt-1 text-[#EEE8FE] bg-[#7201FF] rounded-sm text-xs px-1 w-fit">
                Total Query: {category.count}
              </span>
            </div>
            <div className="-mt-8 card-body items-center text-center">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="card-title">{category.title}</h2>
              </div>
              <p>{category.description}</p>
              <div className="flex items-center justify-center">
                <Link
                  to="/queries"
                  className="btn1 mt-2"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex items-center justify-center">
        <Link
          to="/queries"
          className="btn1 mt-8"
        >
          View All
        </Link>
      </div> */}
    </div>
  );
};

export default CatCard;
