"use client";

import { useState } from "react";
import { Star } from "react-feather";

const FilterSidebar = () => {
  const [feeRange, setFeeRange] = useState(8000);

  return (
    <div className="w-64 p-4 border-r">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold">Filters</h2>
        <button className="text-blue-500 text-sm">Reset</button>
      </div>

      {/* Consultation Fee Slider */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Consultation Fee</h3>
        <input
          type="range"
          min="0"
          max="8000"
          value={feeRange}
          onChange={(e) => setFeeRange(e.target.value)}
          className="w-full accent-blue-500"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>$0</span>
          <span>${feeRange}</span>
        </div>
      </div>

      {/* Availability Filters */}
      <div className="space-y-3 mb-6">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="rounded border-gray-300" />
          <span>Online Now</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="rounded border-gray-300" />
          <span>Available in next 2 hours</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="rounded border-gray-300" />
          <span>Available today</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="rounded border-gray-300" />
          <span>Female doctors only</span>
        </label>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Select Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <div className="flex">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div>
        <h3 className="font-medium mb-3">Sort By</h3>
        <div className="space-y-2">
          {[
            "Relevance (Default)",
            "Popularity",
            "Fees: low to high",
            "Fees: high to low",
            "Rating"
          ].map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="radio"
                name="sortBy"
                className="text-blue-500"
                defaultChecked={option === "Relevance (Default)"}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
