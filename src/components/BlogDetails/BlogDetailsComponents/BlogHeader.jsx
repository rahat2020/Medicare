import Image from "next/image";
import {
  User,
  Calendar,
  MessageCircle,
  Heart,
  Share2,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram
} from "react-feather";
import BlogContent from "./BlogContent";

const BlogHeader = ({
  category,
  title,
  author,
  date,
  likes,
  shares,
  image,
  categoryColorMap,
  comments
}) => {
  return (
    <header className="max-w-3xl mx-auto bg-white shadow p-6">
      <div className="container mx-auto">
        {/* Blog Banner Image */}
        <Image
          src={image}
          alt="Blog banner"
          width={500}
          height={224}
          className="w-full rounded mb-6"
        />

        {/* Blog Metadata */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          {/* Left Section: Category, Author, Date */}
          <div className="flex items-center space-x-4">
            <span
              className={`px-3 py-1 text-sm font-semibold rounded-full ${
                categoryColorMap[category] || "bg-black text-white"
              }`}
            >
              {category}
            </span>
            <div className="flex items-center space-x-2">
              <User size={16} className="text-blue-600" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={16} className="text-blue-600" />
              <span>{date}</span>
            </div>
          </div>

          {/* Right Section: Comments, Likes, Shares */}
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
        <BlogContent
          title={title}
          CheckCircle={CheckCircle}
          Facebook={Facebook}
          Twitter={Twitter}
          Instagram={Instagram}
        />
      </div>
    </header>
  );
};

export default BlogHeader;
