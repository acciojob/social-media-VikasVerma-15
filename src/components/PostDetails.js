import React from "react";
import { useParams } from "react-router-dom"; 

export default function PostDetails() {
  const { id } = useParams(); 

  return (
    <div className="post">
      <h2>Edit Post</h2>
      <input defaultValue={`Post ${id}`} />
      <button className="button">Save</button>
    </div>
  );
}
