import React from "react";
import { useState } from "react";

export default function CreatePost({ setPosts, users }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setPosts((p) => [
          ...p,
          {
            id: Date.now().toString(),
            title,
            content,
            author,
            reactions: [0, 0, 0, 0, 0]
          }
        ]);
      }}
    >
      <input id="postTitle" onChange={(e) => setTitle(e.target.value)} />
      <select id="postAuthor" onChange={(e) => setAuthor(e.target.value)}>
        <option></option>
        {users.map((u) => (
          <option key={u.id} value={u.id}>
            {u.name}
          </option>
        ))}
      </select>
      <textarea id="postContent" onChange={(e) => setContent(e.target.value)} />
      <button>Add Post</button>
    </form>
  );
}

