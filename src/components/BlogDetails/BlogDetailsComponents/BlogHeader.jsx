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
}) => {
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
          <span className={`px-3 py-1 text-sm font-semibold rounded-full ${color}`}>
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

      <BlogContent
        title={title}
        CheckCircle={CheckCircle}
        Facebook={Facebook}
        Twitter={Twitter}
        Instagram={Instagram}
        paragraph1={paragraph1}
        paragraph2={paragraph2}
        paragraph3={paragraph3}
        quote={quote}
        points={points}
      />
    </header>
  );
};

export default BlogHeader;
