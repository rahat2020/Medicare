"use client";

import React from "react";
import Image from "next/image";

const RecentPost = () => {
  const posts = [
    {
      date: "22 June 2023",
      title: "Precious Tips To Help You Get Better.",
      image:
        "https://media.istockphoto.com/id/2154829989/photo/a-doctor-interacting-with-medical-icons-on-a-futuristic-interfac.jpg?s=1024x1024&w=is&k=20&c=x5B3eD84z1nLokUFjEyw4HtZjIILJUQcdKMBraHTMCo="
    },
    {
      date: "22 June 2023",
      title: "Your Health Matters: Tips & Tricks.",
      image:
        "https://media.istockphoto.com/id/1869420726/photo/human-brain.jpg?s=1024x1024&w=is&k=20&c=ui2uCTPbWaLU3zoAZz2pHVtM97yRR_2y1PBDMyfiGAw="
    },
    {
      date: "22 June 2023",
      title: "Stay Healthy During the Pandemic.",
      image:
        "https://images.unsplash.com/photo-1690306815535-dbe66a7c6185?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h3 className="text-lg font-bold text-gray-800 border-b-2 border-blue-500 inline-block pb-1 mb-4">
        Recent Post
      </h3>
      <ul className="space-y-4">
        {posts.map((post, index) => (
          <li key={index} className="flex space-x-4">
            <div className="w-24 h-16 relative">
              <Image src={post.image} alt={post.title} fill className="object-cover rounded-md" />
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
