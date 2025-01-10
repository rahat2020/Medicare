"use client";

import { categories } from "@/data/blogsData";
import ArrowIcon from "@/UI/customSVG/ArrowIcon";
import React from "react";
import { Search } from "react-feather";

const SearchAndCategories = () => {
  return (
    <div>
      {/* Search Section */}
      <div className="bg-white p-4 shadow rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="absolute right-2 top-2 text-blue-600 hover:text-blue-800"
          >
            <Search />
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white p-4 shadow rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-500 inline-block pb-1 mb-4">
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center justify-between hover:text-blue-600">
              <span>{category}</span>
              <ArrowIcon />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchAndCategories;
