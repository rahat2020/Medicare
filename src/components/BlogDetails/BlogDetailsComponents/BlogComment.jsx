import React from "react";
import Image from "next/image";
import { comments } from "@/data/blogsData";

const CommentSection = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Total Comment ({comments.length.toString().padStart(2, "0")})
      </h2>
      {comments.map((comment) => (
        <div key={comment.id} className="mb-6 border-b pb-4 last:border-b-0">
          {/* Parent Comment */}
          <div className="flex items-start gap-4">
            <Image
              src={comment.avatar}
              alt={`${comment.name}'s avatar`}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-800">{comment.name}</h3>
                <p className="text-sm text-gray-500">{comment.time}</p>
              </div>
              <p className="text-gray-700 mt-2">{comment.comment}</p>
              <button className="mt-2 text-blue-500 text-sm font-medium hover:underline">
                Reply
              </button>
            </div>
          </div>

          {/* Replies */}
          {comment.replies.length > 0 && (
            <div className="ml-14 mt-4 space-y-4">
              {comment.replies.map((reply) => (
                <div key={reply.id} className="flex items-start gap-4">
                  <Image
                    src={comment.avatar}
                    alt={`${reply.name}'s avatar`}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-md font-medium text-gray-800">{reply.name}</h3>
                      <p className="text-sm text-gray-500">{reply.time}</p>
                    </div>
                    <p className="text-gray-700 mt-2">{reply.comment}</p>
                    <button className="mt-2 text-blue-500 text-sm font-medium hover:underline">
                      Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
