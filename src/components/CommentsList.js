import React from "react";

export const CommentsList = ({ comments }) => {
  return (
    <>
      <h3 className="sm:text-2xl text-xl font-bold my-6 text-gray-900">
        Comments:
      </h3>
      {comments.map((comment, index) => (
        <div className="bg-slate-100 rounded-lg p-2 mb-2" key={index}>
          <h4 className="text-xl font-bold">{comment.username}</h4>
          <p className="mt-1">{comment.text}</p>
        </div>
      ))}
    </>
  );
};