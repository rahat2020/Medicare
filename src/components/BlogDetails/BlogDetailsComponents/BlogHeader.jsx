import Image from "next/image";
import { User, Calendar, MessageCircle, Heart, Share2 } from "react-feather";
import BlogContent from "./BlogContent";

const BlogHeader = ({ content }) => {
  const {
    title,
    category,
    color,
    image,
    date,
    author,
    comments,
    likes,
    shares,
    paragraph1,
    paragraph2,
    paragraph3,
    quote,
    points
  } = content;

  return (
    <header className="max-w-5xl mx-auto bg-white shadow p-6 rounded-lg">
      <Image
        src={image}
        alt="Blog banner"
        width={1200}
        height={600}
        className="w-full h-auto rounded-lg mb-6 object-cover"
        priority
      />

      <div className="flex flex-col md:flex-row md:items-center justify-between text-sm text-gray-500 mb-4 gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <span
            className={`px-3 py-1 text-sm font-semibold rounded-full ${color || "bg-black text-white"}`}
          >
            {category}
          </span>
          <div className="flex items-center gap-2">
            <User size={16} className="text-blue-600" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-blue-600" />
            <span>{date}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Heart size={16} />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={16} />
            <span>{comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <Share2 size={16} />
            <span>{shares}</span>
          </div>
        </div>
      </div>

      <BlogContent content={{ title, paragraph1, paragraph2, paragraph3, quote, points }} />
    </header>
  );
};

export default BlogHeader;
