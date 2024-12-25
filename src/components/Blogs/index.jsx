"use client";

import React, { useState } from "react";
import Pagination from "@/UI/Pagination";
import Image from "next/image";
import { User, Calendar, MessageCircle, Heart, Share2 } from "react-feather";
import { blogs } from "@/data/blogsData";
import CommonBanner from "@/UI/CommonBanner";
import Link from "next/link";

const categoryColorMap = {
  Doctor: "bg-pink-700 text-white",
  Medical: "bg-green-700 text-white",
  Hospital: "bg-blue-700 text-white",
  Technology: "bg-red-700 text-white",
  Healthcare: "bg-purple-700 text-white",
  Lifestyle: "bg-yellow-700 text-white",
  Wellness: "bg-orange-700 text-white",
  Science: "bg-cyan-700 text-white",
  Research: "bg-gray-700 text-white",
  Innovation: "bg-teal-700 text-white",
  Pediatrics: "bg-indigo-700 text-white",
  Neurology: "bg-lime-700 text-white"
};

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const currentBlogs = blogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <CommonBanner title="Popular Blogs" routeName="Blogs" />
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map(
            ({
              id,
              category,
              title,
              date,
              description,
              author,
              comments,
              likes,
              shares,
              image
            }) => {
              return (
                <div
                  key={id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="relative">
                    <Image
                      src={image}
                      alt={title}
                      width={500}
                      height={224}
                      className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                      priority
                    />
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 text-sm font-semibold rounded-full ${
                        categoryColorMap[category] || "bg-black text-white"
                      }`}
                    >
                      {category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex gap-3 text-gray-600 text-sm mb-3">
                      <div className="flex items-center space-x-1">
                        <User size={16} className="text-blue-600" />
                        <span>{author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} className="text-blue-600" />
                        <span>{date}</span>
                      </div>
                    </div>
                    <h2 className="text-lg font-bold text-gray-800 transition-colors hover:text-blue-500">
                      {title}
                    </h2>
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed flex-1">
                      {description}
                    </p>
                    <div className="flex items-center justify-between mt-5 text-gray-800 text-sm">
                      <Link
                        href={`/blogs/${id}`}
                        className="transition-colors hover:text-blue-500 font-semibold"
                      >
                        Read More →
                      </Link>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <MessageCircle size={16} />
                          <span>{comments}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart size={16} />
                          <span>{likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Share2 size={16} />
                          <span>{shares}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BlogPage;
