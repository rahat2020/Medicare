"use client";

import React from "react";

const PostTags = () => {
  const tags = [
    "Appointment",
    "Doctors",
    "Health",
    "Best",
    "Hospital",
    "Laboratory",
    "Antibiotics",
    "COVID-19",
    "Care"
  ];

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-500 inline-block pb-1 mb-4">
        Post Tags
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-sm rounded-lg hover:bg-blue-100 hover:text-blue-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostTags;
