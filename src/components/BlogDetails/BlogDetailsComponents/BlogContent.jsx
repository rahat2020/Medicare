import React from "react";

const BlogContent = ({ CheckCircle, Facebook, Twitter, Instagram, title }) => {
  return (
    <div className="max-w-5xl mx-auto bg-white px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">
        {title}
      </h1>
      <div className="mt-4">
        <p className="text-gray-600 leading-relaxed text-justify">
          Dramatically syndicate alternative infrastructures through backward-compatible
          web-readiness. Completely predominate economically sound information without maintainable
          alignments. Compellingly generate resource-maximizing imperatives through cooperative best
          practices.
        </p>

        <ul className="mt-4 space-y-2 text-gray-600">
          <li className="flex items-start">
            <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
            <span className="ml-2">
              Dramatically syndicate alternative infrastructures through backward-compatible.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
            <span className="ml-2">
              Economically sound information without maintainable alignments.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
            <span className="ml-2">
              Collaboratively syndicate world-class information after principle-centered.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
            <span className="ml-2">
              Collaboratively network bricks-and-clicks best practices via economically sound.
            </span>
          </li>
        </ul>
        <blockquote className="mt-6 bg-blue-100 border-l-4 border-blue-500 pl-4 italic text-gray-700">
          “There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by variations of passages.”
        </blockquote>

        <p className="mt-4 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book.
        </p>
        <p className="mt-4 text-gray-600">
          Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry standard dummy text ever since the 1500.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 border-t pt-4 space-y-4 sm:space-y-0">
        <div className="flex flex-wrap space-x-3 space-y-2 sm:space-y-0">
          {["Appointment", "Doctors", "Health", "Hospital"].map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1 text-sm font-semibold bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-500 font-medium">Share :</span>
          <Facebook className="hover:text-blue-600 cursor-pointer" />
          <Twitter className="hover:text-blue-600 cursor-pointer" />
          <Instagram className="hover:text-blue-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
