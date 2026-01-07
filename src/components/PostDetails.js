import React from "react";
import { useState } from "react";

export default function PostDetails() {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("Hello World");
  const [content, setContent] = useState("First post");

  return (
    <div className="post">
      {editing ? (
        <>
          <input
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={() => setEditing(false)}>Save</button>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <p>{content}</p>
          <button className="button" onClick={() => setEditing(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}
