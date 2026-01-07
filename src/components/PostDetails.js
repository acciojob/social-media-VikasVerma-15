import React from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();

  return (
    <div className="post-details">
      <h2>Edit Post</h2>
     
      <input id="postTitle" defaultValue={`Post ${id}`} />
      <textarea id="postContent" defaultValue={`Content for post ${id}`} />
      <button className="button">Save</button>
    </div>
  );
}

