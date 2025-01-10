import React from "react";
import Image from "next/image";
import { comments } from "@/data/blogsData";
import AppButton from "@/UI/AppButton";

const CommentSection = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Total Comment ({comments.length.toString().padStart(2, "0")})
        {/* Total Comment ({convertNumToPad(comments.length)}) */}
      </h2>
      {comments.map(({ id, name, avatar, time, comment, replies }) => (
        <div key={id} className="mb-6 border-b pb-4 last:border-b-0">
          {/* Parent Comment */}
          <div className="flex items-start gap-4">
            <Image
              src={avatar}
              alt={`${name}'s avatar`}
              width={48}
              height={48}
              className="rounded-full object-cover"
              priority
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-800">{name}</h3>
                <p className="text-sm text-gray-500">{time}</p>
              </div>
              <p className="text-gray-700 mt-2">{comment}</p>
              <AppButton
                text="Reply"
                customStyles={" mt-2 text-blue-500 text-sm font-medium hover:underline"}
              />
            </div>
          </div>

          {/* Replies */}
          {replies.length > 0 && (
            <div className="ml-14 mt-4 space-y-4">
              {replies.map(
                ({
                  id: replyId,
                  name: replyName,
                  avatar: replyAvatar,
                  time: replyTime,
                  comment: replyComment
                }) => (
                  <div key={replyId} className="flex items-start gap-4">
                    <Image
                      src={replyAvatar}
                      alt={`${replyName}'s avatar`}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                      priority
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-md font-medium text-gray-800">{replyName}</h3>
                        <p className="text-sm text-gray-500">{replyTime}</p>
                      </div>
                      <p className="text-gray-700 mt-2">{replyComment}</p>
                      <AppButton
                        text="Reply"
                        withoutHrefBtn={true}
                        customStyles={" mt-2 text-blue-500 text-sm font-medium hover:underline"}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
