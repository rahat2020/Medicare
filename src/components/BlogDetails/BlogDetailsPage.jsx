import React from "react";
import { blogs, categoryColorMap } from "@/data/blogsData";
import BlogHeader from "./BlogDetailsComponents/BlogHeader";
import BlogComment from "./BlogDetailsComponents/BlogComment";
import BlogCommentForm from "./BlogDetailsComponents/BlogCommentForm";
import BlogSidebar from "./BlogDetailsComponents/BlogSidebar";

const BlogDetailsPage = ({ params }) => {
  const { id } = params;

  const blog = blogs.find((blog) => blog.id.toString() === id);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-bold text-gray-700">Blog not found</p>
      </div>
    );
  }

  const { category, title, date, description, author, comments, likes, shares, image } = blog;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <div className="w-full lg:w-3/4">
          <BlogHeader
            category={category}
            image={image}
            categoryColorMap={categoryColorMap}
            title={title}
            author={author}
            date={date}
            likes={likes}
            shares={shares}
            comments={comments}
            description={description}
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
