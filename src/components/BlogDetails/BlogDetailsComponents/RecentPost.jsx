"use client";

import React from "react";
import Image from "next/image";
import { posts } from "@/data/blogsData";

const RecentPost = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-500 inline-block pb-1 mb-4">
        Recent Post
      </h3>
      <ul className="space-y-4">
        {posts.map((post, index) => (
          <li key={index} className="flex space-x-4">
            <div className="w-24 h-16 relative">
              <Image
                src={post.image}
                priority
                alt={post.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <p className="text-sm text-gray-600">{post.date}</p>
              <h4 className="text-md font-medium hover:text-blue-600">{post.title}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPost;
