import React from "react";
import { Shield, AlertTriangle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative bg-black min-h-[95vh] flex items-center text-white pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where people protect
              <span className="block">each other.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Connect and live more safely. Crime360 is a personal safety
              network that empowers you to protect yourself and the people and
              places you care about.
            </p>
            <div className="flex  gap-4">
              <Link to='/report-crime' className=" bg-red-800   text-white px-8 py-3 rounded-md font-semibold transition-colors">
                Report Incident
              </Link>
              <button className="border-2 border-white/60 hover:border-white text-white px-8 py-3 rounded-3xl font-semibold transition-colors">
                View All Posts
              </button>
            </div>

          </div>
          <div className="flex justify-end">
            <img
              src="https://i.ibb.co.com/GfprZhMG/bd-map-2-removebg-preview.png"
              alt="Safety First"
              className="rounded-lg shadow-2xl"
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
