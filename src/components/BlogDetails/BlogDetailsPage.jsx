import React from "react";
import { blogs } from "@/data/blogsData";
import BlogHeader from "./BlogDetailsComponents/BlogHeader";
import BlogComment from "./BlogDetailsComponents/BlogComment";
import BlogCommentForm from "./BlogDetailsComponents/BlogCommentForm";
import BlogSidebar from "./BlogDetailsComponents/BlogSidebar";

const BlogDetailsPage = ({ params }) => {
  const { id } = params;

  const blog = blogs.find((blog) => blog.id.toString() === id);

  const {
    category,
    color,
    title,
    date,
    author,
    comments,
    likes,
    shares,
    image,
    paragraph1,
    paragraph2,
    paragraph3,
    quote,
    points
  } = blog || {};

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-bold text-gray-700">Blog not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <div className="w-full lg:w-3/4">
          <BlogHeader
            content={{
              title,
              category,
              color,
              image,
              date,
              author,
              likes,
              shares,
              comments,
              paragraph1,
              paragraph2,
              paragraph3,
              quote,
              points
            }}
          />
          <div className="mt-8">
            <BlogComment />
          </div>
          <div className="mt-8">
            <BlogCommentForm />
          </div>
        </div>
        <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
