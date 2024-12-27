import React from "react";
import { blogs, categoryColorMap } from "@/data/blogsData";
import BlogHeader from "./BlogDetailsComponents/BlogHeader";
import BlogComment from "./BlogDetailsComponents/BlogComment";
import BlogCommentForm from "./BlogDetailsComponents/BlogCommentForm";

const BlogDetailsPage = ({ params }) => {
  const { id } = params;

  // Find the blog data using the ID from the URL params
  const blog = blogs.find((blog) => blog.id.toString() === id);

  // If blog not found, show a message
  if (!blog) {
    return <p>Blog not found</p>;
  }

  const { category, title, date, description, author, comments, likes, shares, image } = blog;

  return (
    <div className="container mx-auto mt-8">
      {/* Pass blog data to the BlogHeader */}
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
      <div className="container mx-auto mt-8">
        <BlogComment />
      </div>
      <div className="container mx-auto mt-8">
        <BlogCommentForm />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
