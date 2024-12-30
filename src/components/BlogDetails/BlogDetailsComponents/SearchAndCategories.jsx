"use client";

import React from "react";

const SearchAndCategories = () => {
  const categories = ["Urology", "Gynecologist", "Medicine", "Child Care", "Covid Test", "Dentist"];

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchAndCategories;
