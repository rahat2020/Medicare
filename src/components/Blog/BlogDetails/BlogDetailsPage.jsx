import React from "react";
import { blogs } from "@/data/blogsData"; // Import your blogs data
import Image from "next/image";

const BlogDetailsPage = ({ params }) => {
  const { id } = params; // Get the id from the params

  // Find the specific blog based on the id
  const blog = blogs.find((blog) => blog.id.toString() === id);

  if (!blog) {
    return <p>Blog not found</p>; // Handle the case where no blog matches the id
  }

  const {
    category,
    categoryColors,
    title,
    date,
    description,
    author,
    comments,
    likes,
    shares,
    image
  } = blog;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="flex gap-4 items-center mb-6">
        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${categoryColors}`}>
          {category}
        </span>
        <p className="text-gray-600">{date}</p>
        <p className="text-gray-600">By {author}</p>
      </div>
      <Image
        src={image}
        alt={title}
        width={500}
        height={224}
        className="w-full h-96 object-cover mb-6"
      />
      <p className="text-gray-700 leading-relaxed">{description}</p>
      <div className="flex items-center justify-between mt-6 text-gray-600 text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span>Comments:</span>
            <span>{comments}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>Likes:</span>
            <span>{likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>Shares:</span>
            <span>{shares}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
