"use client";

import { useState } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [searchInput, setSearchInput] = useState("");
  const [experienceDropdown, setExperienceDropdown] = useState(false);
  const [locationDropdown, setLocationDropdown] = useState(false);

  return (
    <div className="bg-white py-10 md:py-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Find your dream job now
        </h1>
        <p className="text-center text-gray-600 mb-8">
          <span className="text-primary font-medium">5 lakh+</span> jobs for you to explore
        </p>

        {/* Search Form */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Enter skills / designations / companies"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>

            {/* Experience Dropdown */}
            <div className="relative w-full md:w-48">
              <button
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
                onClick={() => setExperienceDropdown(!experienceDropdown)}
              >
                <span className="text-gray-600">Select experience</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
              {experienceDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  <div className="py-1">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setExperienceDropdown(false);
                      }}
                    >
                      0 Years
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setExperienceDropdown(false);
                      }}
                    >
                      1 Year
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setExperienceDropdown(false);
                      }}
                    >
                      2 Years
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setExperienceDropdown(false);
                      }}
                    >
                      3 Years
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setExperienceDropdown(false);
                      }}
                    >
                      4+ Years
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Location Dropdown */}
            <div className="relative w-full md:w-48">
              <button
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
                onClick={() => setLocationDropdown(!locationDropdown)}
              >
                <span className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                  Enter location
                </span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
              {locationDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  <div className="py-1">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setLocationDropdown(false);
                      }}
                    >
                      Delhi / NCR
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setLocationDropdown(false);
                      }}
                    >
                      Mumbai
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setLocationDropdown(false);
                      }}
                    >
                      Bangalore
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setLocationDropdown(false);
                      }}
                    >
                      Hyderabad
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setLocationDropdown(false);
                      }}
                    >
                      Chennai
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Search Button */}
            <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Mock Interview Banner */}
        <div className="max-w-4xl mx-auto mt-8 bg-gradient-to-r from-teal-500/90 to-teal-400/90 rounded-lg p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-xs text-white/80 mb-1">Naukri AI-powered</p>
              <h3 className="text-white text-xl font-semibold mb-2">Practice customised mock interview with AI</h3>
              <p className="text-white/90 text-sm mb-4">Get AI feedback, tips and insights</p>
              <button className="bg-white text-teal-600 px-4 py-2 rounded-full font-medium text-sm hover:bg-white/90 transition-colors">
                Start for free
              </button>
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 relative">
              <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-5/6 h-5/6 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-4/6 h-4/6 bg-white/40 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
