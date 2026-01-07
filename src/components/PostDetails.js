import React from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { postId } = useParams();

  return (
    <div>
      <h2>Edit Post</h2>
      <input defaultValue={`Post ${postId}`} />
      <button className="button">Save</button>
    </div>
  );
}
