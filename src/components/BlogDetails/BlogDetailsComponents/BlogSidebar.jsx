import React from "react";
import SearchAndCategories from "./SearchAndCategories";
import RecentPost from "./RecentPost";
import PostTags from "./PostTags";

const BlogSidebar = () => {
  return (
    <aside className="space-y-8">
      <SearchAndCategories />
      <RecentPost />
      <PostTags />
    </aside>
  );
};

export default BlogSidebar;
