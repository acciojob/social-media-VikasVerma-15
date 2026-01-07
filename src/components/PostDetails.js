import React, { useState } from "react";

export default function PostDetails() {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("Hello World");
  const [content, setContent] = useState("First post");

  return (
    <div className="post">
      {edit ? (
        <>
          <input id="postTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)} />
          <button onClick={() => setEdit(false)}>Save</button>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <p>{content}</p>
          <button className="button" onClick={() => setEdit(true)}>Edit</button>
        </>
      )}
    </div>
  );
}
